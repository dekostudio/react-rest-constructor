import { useMeQuery } from "@/entities/session"
import { useAppSelector } from "@/shared/model"
import { skipToken } from "@reduxjs/toolkit/query"

export function MainPage() {

  // test
  const isAuthorized = useAppSelector((state) => state.session.accessToken)
  const { data: profileData } = useMeQuery(isAuthorized ? undefined : skipToken,
    {
      skip: !isAuthorized,
    }
  )
  
  return (
    <div className="container">
      <h1>main page!</h1>
      <h1>{profileData?.email}</h1>
    </div>
  )
}