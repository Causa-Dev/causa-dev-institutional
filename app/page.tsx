import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { OurValues } from './components/OurValuesSection'
// import { OurImpact } from './components/OurImpactSection'
// import { DoubtsSection } from './components/DoubtsSection'
import { SessionLinkedin } from './components/SessionLinkedin'
import { Footer } from './components/Footer'
import Testimonials from './components/SessionTestimonials'
import { getContentfulData } from './utils/getContentfulData'

export default async function Home() {
  const promises = [
    getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValuesContent'),
    getContentfulData('ourProjects'),
    // getContentfulData('ourImpactContent'),
    // getContentfulData('testimonialsContent'),
    // getContentfulData('doubts'),
    // getContentfulData('doubtsContent'),
    getContentfulData('linkedin'),
    getContentfulData('footer'),
  ]

  const [
    headerValues,
    beginValues,
    aboutValues,
    ourValues,
    ourProjects,
    // ourImpact,
    // testimonialsContent,
    // doubtsValues,
    // doubtsContentValues,
    linkedin,
    footer,
  ] = await Promise.all(promises)

  return (
    <>
      <Header values={headerValues.entries} />
      <main>
        <SessionBegin values={beginValues.entries} />
        <SessionAboutUs values={aboutValues.entries} />
        <OurValues values={ourValues.entries} />
        {/* <OurImpact values={ourImpact.entries} /> */}
        <Testimonials values={ourProjects.entries} />
        {/* <DoubtsSection
          values={doubtsValues.entries}
          content={doubtsContentValues.entries}
        /> */}
        <SessionLinkedin values={linkedin.entries} />
      </main>
      <Footer values={footer.entries} />
    </>
  )
}
