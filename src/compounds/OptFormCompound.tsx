import React from "react"
import OptFormEmail from '../components/OptForm/OptFormEmail'
import OptFormText from '../components/OptForm/OptFormText'
import OptFormWrapper from '../components/OptForm/OptFormWrapper'


function OptFormCompound() {
  return (
    <>
      <OptFormText>
        Ready to watch? Enter your email to create or restart your membership.
      </OptFormText>
			<OptFormWrapper>
				<OptFormEmail />
			</OptFormWrapper>
    </>
  )
}

export default OptFormCompound
