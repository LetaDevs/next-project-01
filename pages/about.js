import DarkLayout from '@/components/layouts/DarkLayout'
import MainLayout from '@/components/layouts/MainLayout'

export default function About() {
  return (
    <>
      <h1>About nuevo</h1>
    </>
  )
}

About.getLayout = function getLayout(page){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}