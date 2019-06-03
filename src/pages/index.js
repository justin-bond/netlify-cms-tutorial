import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => <div>
  <AniLink 
    to="/project/test-project"
    cover
    bg="#000"
    direction="right"
    duration={1}
  >
    test project
  </AniLink>
  <br />
  <AniLink 
    fade
    to="/project/project-2"
  >
    project 2
  </AniLink>
</div>
