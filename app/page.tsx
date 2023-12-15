import { OurValues } from './components/OurValuesSection'
import { Header } from './components/Header'
import { SessionBegin } from './components/SessionBegin'
import { SessionAboutUs } from './components/SessionAboutUs'
import { getContentfulData } from './utils/getContentfulData'
import { OurImpact } from './components/OurImpactSection'
import { DoubtsSection } from './components/DoubtsSection'

export default async function Home() {
  const promises = [
    getContentfulData('header'),
    getContentfulData('begin'),
    getContentfulData('aboutUs'),
    getContentfulData('ourValues'),
    getContentfulData('ourImpact'),
    getContentfulData('doubts'),
    getContentfulData('doubtsContent'),
  ]

  const [
    headerValues,
    beginValues,
    aboutValues,
    ourValues,
    ourImpact,
    doubtsValues,
    doubtsContentValues,
  ] = await Promise.all(promises)

  return (
    <>
      <Header values={headerValues.entries} />
      <main>
        <SessionBegin values={beginValues.entries} />
        <SessionAboutUs values={aboutValues.entries} />
        <OurValues values={ourValues.entries} tableName={ourValues.tableName} />
        <OurImpact values={ourImpact.entries} tableName={ourImpact.tableName} />
        <DoubtsSection
          values={doubtsValues.entries}
          content={doubtsContentValues.entries}
        />
      </main>
    </>
  )
}
