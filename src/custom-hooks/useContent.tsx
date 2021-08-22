import { useEffect, useState } from 'react'
import firebase from '../lib/firebase.prod'

function useContent(target: string) {
  const [content, setContent] = useState<object[]>([])

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }))
        setContent(allContent)
      })
      .catch((error: Error) => {
        console.error(error.message)
      })
  }, [])

  return { [target]: content }
}

export default useContent
