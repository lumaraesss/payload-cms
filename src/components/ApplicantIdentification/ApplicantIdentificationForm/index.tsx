'use client'
import { fields } from '@/blocks/Form/fields'
import RequestIdentificationTitle from '@/blocks/Form/RequestIdentificationTitle'
import { StepperBlock } from '@/blocks/Stepper/Component'
import { Form as FormType } from '@/payload-types'
import { Button } from '@ama-pt/agora-design-system'
import { FC, useMemo, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import classNames from 'classnames';

type Props = {
  form: FormType
}

const IdentificationForm: FC<Props> = ({ form }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [formValues, setFormValues] = useState<string>()
  const formMethods: UseFormReturn<any> = useForm<any>()

  const {
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    register,
  } = formMethods
  const onSubmit = () => {
    try {
      const values = getValues()
      const formattedValues = JSON.stringify(values, null, 2)
      setFormValues(formattedValues)
    } catch (error) {
      console.error(error)
    }
  }

  const renderFields = useMemo(() => {
    if (!form.fields) return null

    return form.fields.map((field) => {
      const FieldComponent = fields[field.blockType]
      if (!FieldComponent) {
        console.log(`Block not found: ${field.blockType}`)
        return null
      }

      return (
        <FieldComponent
          key={field.id}
          form={form}
          {...field}
          {...formMethods}
          control={control}
          errors={errors}
          register={register}
        />
      )
    })
  }, [form.fields, formMethods, control, errors, register])


  return (
    <div className="mt-8 md:mt-[64px] mb-8 md:mb-16">
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[136px]">
            <div className="hidden md:block mt-[128px]">
              <StepperBlock
                handleNextStep={(curr: number) => setCurrentStep(curr)}
                currentStep={currentStep}
                className="mt-4"
                steps={{
                  steps: [
                    { id: 0, title: 'Início' },
                    { id: 1, title: 'Identificação' },
                    { id: 2, title: 'Certidão de Nascimento' },
                    { id: 3, title: 'Resumo' },
                    { id: 4, title: 'Pagamento' },
                    { id: 5, title: 'Submissão' },
                  ],
                }}
              />
            </div>

            <div className="flex-1" data-testid="identification-container">
              <div className="flex flex-col gap-6 md:gap-[64px]">
                <RequestIdentificationTitle />
                <section className="hero-section mb-5">
                  <form
                    data-testid="identification-form"
                    id={String(form.id)}
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-wrap gap-4 md:gap-[32px] w-full"
                    noValidate
                  >
                    {renderFields}
                    <div className="flex flex-col md:flex-row justify-between w-full gap-4 mt-5" data-cy="submit-buttons">
                      <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
                        <Button variant="danger" appearance="outline" className="w-full md:w-auto" data-cy="submit-cancel">
                          Cancelar
                        </Button>
                        <Button type="button" appearance="outline" className="w-full md:w-auto" data-cy="submit-save">
                          Guardar e Sair
                        </Button>
                      </div>
                      <Button
                        type="submit"
                        data-cy="submit-button"
                        className="w-full md:w-auto bg-blue-600 text-white flex justify-center items-center gap-2"
                      >
                        {form.submitButtonLabel}
                      </Button>
                    </div>
                  </form>

                  {!!formValues && (
                    <div className="p-4 md:p-16 bg-neutral-600 mt-4">
                      <pre className="text-xs md:text-base">{formValues}</pre>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default IdentificationForm