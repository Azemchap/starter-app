import { TypographyDemo } from "@/components/demo/typography-demo"
import { AccordionDemo } from "@/components/shared/accordion"
import { AlertDialogDemo } from "@/components/shared/alert-dialog"

export default function Home() {
  return (
    <section className="">
      <div className="container ">
        <div className="max-w-lg mx-auto" >
          <AccordionDemo />
        </div>
        <br />
        <div className="max-w-lg mx-auto" >
          <AlertDialogDemo />
        </div>
        <br />
        <TypographyDemo />
      </div>
    </section>
  )
}
