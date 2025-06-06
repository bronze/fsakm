import type {FC} from "react"
import {generateStaticParamsFor, importPage} from "nextra/pages"

import {useMDXComponents as getMDXComponents} from "../../../mdx-components"

export const generateStaticParams = generateStaticParamsFor("mdxPath")

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const {metadata} = await importPage(params.mdxPath, params.lang)
  return metadata
}

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[]
    lang: string
  }>
}>

const Wrapper = getMDXComponents().wrapper

const Page: FC<PageProps> = async props => {
  const params = await props.params
  const result = await importPage(params.mdxPath, params.lang)
  const {default: MDXContent, toc, metadata} = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <div className="@container">
        <MDXContent {...props} params={params} />
      </div>
    </Wrapper>
  )
}

export default Page
