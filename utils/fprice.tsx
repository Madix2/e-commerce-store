// __________________________DO NOT CHANGE_________________
export const FPrice=(amount: number) =>{
    return(
        new Intl.NumberFormat('en-US',{
            style:'currency',
            currency:'ZAR'
        }).format(amount)
    )
}