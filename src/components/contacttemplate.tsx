// https://www.shadcn-form.com/templates/contact/contact
"use client"

import {useState} from "react"
import {Button} from "@/src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import {Input} from "@/src/components/ui/input"
import {Textarea} from "@/src/components/ui/textarea"
import {zodResolver} from "@hookform/resolvers/zod"
import {Loader2} from "lucide-react"
import {useForm} from "react-hook-form"
import {toast} from "sonner"
import {z} from "zod"

// Schema for contact form validation
const formSchema = z.object({
  name: z.string().min(2, {message: "Name must be at least 2 characters long"}),
  email: z.string().email({message: "Invalid email address"}),
  message: z
    .string()
    .min(10, {message: "Message must be at least 10 characters long"}),
})

export default function ContactFormPreview() {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    try {
      // Simulate a successful contact form submission
      await new Promise(resolve => setTimeout(resolve, 1200)) // simulate network delay
      console.log(values)
      toast.success("Your message has been sent successfully!")
    } catch (error) {
      console.error("Error submitting contact form", error)
      toast.error("Failed to send your message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription>
            Please fill out the form below and we will get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({field}) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({field}) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({field}) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
