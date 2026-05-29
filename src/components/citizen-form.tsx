import { Button } from '@heroui/react'
import { Input, Label } from '@heroui/react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { citizenFormSchema, type CitizenFormType } from '@/types/citizen-form';

interface FormFieldConfig {
  name: keyof CitizenFormType;
  label: string;
  placeholder: string;
  type?: 'text' | 'date' | 'number';
}

const FORM_FIELDS: FormFieldConfig[] = [
  { name: 'citizen_cpf', label: 'CPF', placeholder: '000.000.000-00', type: 'text' },
  { name: 'social_name', label: 'Nome Social', placeholder: 'João Maria', type: 'text' },
  { name: 'full_name', label: 'Nome Completo', placeholder: 'João Maria Silva', type: 'text' },
  { name: 'birth_date', label: 'Data de Nascimento', placeholder: 'DD/MM/YYYY', type: 'date' },
  { name: 'birth_municipality_ibge_code', label: 'Código IBGE Município', placeholder: '3106200', type: 'text' },
  { name: 'mother_name', label: 'Nome da Mãe', placeholder: 'Maria Silva', type: 'text' },
  { name: 'father_name', label: 'Nome do Pai', placeholder: 'João Silva', type: 'text' },
  { name: 'citizen_cns', label: 'CNS', placeholder: '123 4567 8901 2345', type: 'text' },
  { name: 'birth_country_code', label: 'Código País Nascimento', placeholder: '1', type: 'number' },
  { name: 'race_color_code', label: 'Código Raça/Cor', placeholder: '1', type: 'number' },
  { name: 'gender_code', label: 'Código Gênero', placeholder: '1', type: 'number' },
  { name: 'gender_identity_code', label: 'Código Identidade de Gênero', placeholder: '1', type: 'number' },
  { name: 'occupation_cbo_code', label: 'Código CBO Ocupação', placeholder: '2541', type: 'text' },
]

export const CitizenForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(citizenFormSchema)
  })

  const onSubmit = (form: CitizenFormType) => {
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3">
      {FORM_FIELDS.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: fieldProps }) => {
            const fieldId = `input-${field.name}`
            const hasError = field.name in errors

            return (
              <div className="flex flex-col gap-1">
                <Label htmlFor={fieldId}>{field.label}</Label>
                <Input
                  {...fieldProps}
                  id={fieldId}
                  aria-label={field.label}
                  type={field.type || 'text'}
                  className={`w-64 ${hasError ? 'border-red-500' : ''}`}
                  placeholder={field.placeholder}
                  value={(fieldProps.value as string | number) || ''}
                />
                {hasError && (
                  <span className="text-sm text-red-500">
                    {errors[field.name]?.message as string}
                  </span>
                )}
              </div>
            )
          }}
        />
      ))}
      <Button type='submit'>
        Enviar
      </Button>
    </form>
  )
}