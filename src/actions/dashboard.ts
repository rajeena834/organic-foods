'use server'

import supabase from "@/config/supabase-config"



export const getUsersReport = async () => {
    try {
        const { data, error } = await supabase.rpc('get_users_report')
        if (error) throw error

        let resultObject = {
            totalCustomers: data[0].total_customers,
            totalSellers: data[0].total_sellers,
            totalAdmins: data[0].total_admins,
            totalUsers : data[0].total_users
        }
        return {
            success : true,
            data : resultObject
        }
    } catch (error:any) {
        return {
            success : false,
            error : error.message
        }
    }
}