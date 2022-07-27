import * as React from "react"
import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import * as sections from "../components/sections"
// import Fallback from "../components/fallback"

export default function Homepage(props) {
  // const { homepage, data } = props
  const { data } = props
  const authorData = data.allContentfulAuthor.nodes
  console.log("authorData-->", authorData)

  return (
    <>
      {/* <Layout {...homepage}>
        {homepage.blocks.map((block) => {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })}
      </Layout> */}
      {authorData?.map((data) => {
        return (
          <div>
            <h>{data.name}</h>
          </div>
        )
      })}
    </>
  )
}

export const query = graphql`
  query {
    allContentfulAuthor {
      nodes {
        phone
        name
        email
        id
        description {
          description
        }
      }
    }
  }
`
