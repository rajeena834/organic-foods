import React, { useEffect } from 'react'
import Header from './components/header'
import toast from 'react-hot-toast'
import { getCurrentUserFromSupabase } from '@/actions/users'
import Spinner from '@/components/ui/spinner'
import usersGlobalStore, { IUsersGlobalStore } from '@/globals-store/users-store'

function PrivateLayout({ children }: { children: React.ReactNode }) {
    //const [user, setUser] = React.useState(null)

    const {user,setUser} =usersGlobalStore() as IUsersGlobalStore;
    const [loading,setLoading]=React.useState(false)
    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await getCurrentUserFromSupabase()
            if(!response.success){
                          toast.error("an error occurred while fetching user")
  
            }else{
                setUser(response.data)
            }
        } catch (error) {
            toast.error("an error occurred while fetching user")
        }finally{
             setLoading(false)
        }

    }
    useEffect(() => {
       if(!user){
         fetchUser()
     }

    }, [])

    if(loading){
        return <Spinner/>
    }
    return (
        <div>
            <Header user={user!} />
            {children}
        </div>
    )
}

export default PrivateLayout