## Asyncronus data query

# when u know that data is comming from the request or API then use the Async data query method

# default value will be having selector 
- which will be having get which calls the axios.get("API URL")

- then the other selector (totalNotificationSelector)
will be there just to purform an action on that data and give the value  


# when request goes the value is rendered directly no delay 
- if we put default: {
            network: 0, 
            jobs: 0, 
            messaging: 0, 
            notifications: 0
        }

- then there will be delay when actual value reload

# using the actual Aync method u can make it direct and accurate in the same folder done 
        get : async()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
# like this