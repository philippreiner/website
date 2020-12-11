import { getAllPostIds, getPostData } from '../../lib/posts'
import NextLink from 'next/link'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export default function Post({ postData }) {
  return (
    <>
    <h1>{postData.title}</h1>
    {postData.id}
    <br/>
    {postData.date}
    <br/>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    <br/>
    <NextLink href="/">
      <a>
        Zurück
      </a>
    </NextLink>
    </>
  )

}