import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        axios.get(`https://api.worldofwarships.eu/wows/account/list/?application_id=b0f4d669a9745f5dd7eb16395de839be&search=Scattle_`)
        .then(res => {
            setAccounts(res.data)
            console.log(res)
            console.log(accounts.status)
            console.log(accounts.data[0].nickname)
        })
    }, [])
    return(
        null
    )
}

export default DataFetching
