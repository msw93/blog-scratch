import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function notFound() {
  return (
    <div>
      <Layout>
        <div style={{textAlign: `center`, padding: '70px'}}>
          404, whoops, <Link to="/">head back home</Link>{" "}
        </div>
      </Layout>
    </div>
  )
}
