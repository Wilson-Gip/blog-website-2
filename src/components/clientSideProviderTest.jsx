//tests in layout.jsx
"use client"

//when clientside wrapper is used with server sided components, the components are still server sided
const ClientSideProviderTest = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default ClientSideProviderTest