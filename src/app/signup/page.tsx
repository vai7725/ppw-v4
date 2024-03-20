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
import { Button } from '@/components/ui/button'
import Container from '@/components/custom/Container'
import Link from 'next/link'
import authService from '@/appwrite/auth'
import { config } from '@/app/utils/config'

const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  const { formState } = form

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await authService.createAccount(values)
    if (res) {
      const user = await authService.getCurrentUser()
      console.log(user)
    }
  }

  return (
    <Container className="min-h-screen py-20 space-y-12">
      <h1 className="text-2xl font-bold sm:text-3xl text-center ">
        Create an account
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-2xl mx-auto"
        >
          {/* name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Create a password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {formState.isSubmitting ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              'Create account'
            )}
          </Button>
          <div className="text-center">
            Already have an account?{' '}
            <Link href={'/login'} className="text-indigo-700 font-semibold">
              Log in
            </Link>
          </div>
        </form>
      </Form>
    </Container>
  )
}
