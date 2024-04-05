const Footer = () =>{
    return(
        <div className="py-10" style={{ background: "rgb(255 58 90)"}}>
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-tight">
                    BookingEasy.com
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>

        </div>
    )
}
export default Footer