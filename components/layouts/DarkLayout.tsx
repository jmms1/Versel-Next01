import { FC, PropsWithChildren } from "react"


const DarkLayout: FC <PropsWithChildren>  = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255,255,255,5)',
        padding: '10px',
        borderRadius: '10px',
        color: 'black'
    }}>
        <h3>Dark Layout</h3>
        <div>
            {children}
        </div>
    </div>
  )
}

export default DarkLayout