import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'تعلم التصميم ببرنامج الفوطوشوب',
  description: '"استمتع باستكشاف عالم الفوتوشوب مع جلسات تعليمية مباشرة. انضم إلى فصلنا المجاني لتجربة شيقة، تدريب مكثف، شروح شاملة، وتطبيقات عملية لاكتساب المهارات اللازمة للتصميم والتحرير عبر الإنترنت. سجل الآن وابدأ رحلتك نحو الإبداع والتطور المهني!"',
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