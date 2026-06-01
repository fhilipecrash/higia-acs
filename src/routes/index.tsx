import { createFileRoute } from '@tanstack/react-router'
import { CitizenForm } from '@/components/citizen-form'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex justify-center'>
      <CitizenForm />
    </div>
}
