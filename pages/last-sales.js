import React, { useEffect, useState } from 'react'
import useSwr from 'swr'

function LastSalesPage(props) {

    const [sales, Setsales] = useState(props.sales)
    const [isLoading, SetisLoading] = useState(false)

    const { data, error } = useSwr('https://dummybackedfromfirebase/sales.json()')
    
    useEffect(() => {
        if (data) {
            const transformedSales = []
                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username, 
                        volume: data[key].volume, 
                    })
            }
            Setsales(transformedSales)
        }
    },[data])
    
    // useEffect(() => {
    //     fetch('https://dummybackedfromfirebase/sales.json()').then((response) => response.json())
    //         .then((data) => {
    //             const transformedSales = []
    //             for (const key in data) {
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username, 
    //                     volume: data[key].volume, 
    //                 })
    //             }
    //             Setsales(transformedSales)
    //             SetisLoading(false)
    //     })
    // }, [])

    // if (isLoading) {
    //         return <p>isLoading....</p>
    // }
    
        if (error) {
        return <p>Failed to load</p>
    }

        if (!data) {
            return <p>isLoading....</p>
    }

        if (!sales && !sales) {
            return <p>No data yet</p>
        }

    
    return (
        <ul>{sales?.map((sale) => {
            <li key={sale.id}>{sale.username} - ${sale.volume}</li>
        })}</ul>
    )
}

export async function getStaticProps(context) {
    const response = await fetch('https://dummybackedfromfirebase/sales.json()')
    const data  = await response.json()

                const transformedSales = []
                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username, 
                        volume: data[key].volume, 
                    })
                }

                return {
                    props: {
                        sales: transformedSales
                    },
                    revalidate: 10
                }

}

export default LastSalesPage