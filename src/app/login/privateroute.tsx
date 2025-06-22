'use client'
import { redirect } from 'next/navigation'
// import { getCurrentUser } from '@/lib/session'; // función que extrae usuario de cookies o session

export default async function DashboardPage() {
  const user = await getCurrentUser() // desde cookies o JWT server-side

  if (!user?.token) {
    redirect('/login')
  }

  return <div>Contenido del Dashboard</div>
}
