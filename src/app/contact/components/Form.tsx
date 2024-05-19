'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import API from '@/utils/axiosInstance'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 characters long' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email(),
  university: z.string().min(1, { message: 'University name is required' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }),
})

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      university: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data } = await API.post('/contact', values)
      toast({
        title: `✅ ${data.message}`,
      })
    } catch (error: any) {
      toast({
        title: `❌ ${error.message}`,
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-4"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-12 sm:col-span-6">
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="col-span-12 sm:col-span-6">
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-12 sm:col-span-6">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="university"
          render={({ field }) => (
            <FormItem className="col-span-12 sm:col-span-6">
              <FormLabel>University</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the university you read or teach"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Type your message here."
                rows={10}
                {...field}
              />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="btn btn-sm w-full btn-primary col-span-12"
        >
          {form.formState.isSubmitting ? (
            <span className="loading loading-spinner text-secondary"></span>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </Form>
  )
}
