// import { QRCode as QRCodee } from "@jackybaby/react-custom-qrcode"
import { useEffect, useRef } from "react"
import QRCodeStyling from "qr-code-styling"
import { AppPages, Images } from "app/constants"
import xSmall from "images/x-small.png"

interface QrCodeProps {
  name: string
  width?: number
  height?: number
}

export const QRCode = ({ name, width = 100, height = 100 }: QrCodeProps) => {
  const qrCode = new QRCodeStyling({
    width,
    height,
    type: "svg",
    data: name,
    image: xSmall,
    dotsOptions: {
      color: "#000000",
      type: "rounded",
    },
    cornersSquareOptions: {
      type: "extra-rounded",
    },
    backgroundOptions: {
      color: "transparent",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0,
    },
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    qrCode.append(ref.current as HTMLElement)
  }, [])

  useEffect(() => {
    const data = `${window.location.origin}${AppPages.DomainPage}/${name}`

    qrCode.update({
      data,
    })
  }, [name, ref])

  return <div ref={ref}></div>
}
