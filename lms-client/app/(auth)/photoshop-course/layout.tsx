import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'تعلم التصميم ببرنامج الفوطوشوب',
  description: 'استعد لرحلة مثيرة في عالم الفوتوشوب! دورتنا الحية المجانية تقدم لك فرصة لتجربة الدرس الأول مجانًا، مع تدريب مكثف وشرح شامل وتطبيقات عملية تمكنك من اكتساب المهارات اللازمة للعمل في مجال التصميم والمونتاج عبر الإنترنت.',
}


export default function Layout({ children }:{
  children: React.ReactNode
  }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}