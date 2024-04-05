interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps>=({children}) => {
  return (
    <div className="
    max-w-[1920px] 
    p-1
    mx-auto
    xl:px-20
    md:p3
    md:px-2
    px-4
    ">
        {children}
    </div>
  )
}

export default Container;