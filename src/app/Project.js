import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Project() {
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1', subtitle: 'Content 1' },
    { id: 2, title: 'Item 1', subtitle: 'Content 1' },
    { id: 3, title: 'Item 1', subtitle: 'Content 1' },
    { id: 4, title: 'Item 1', subtitle: 'Content 1' },
    { id: 5, title: 'Item 1', subtitle: 'Content 1' },
    { id: 6, title: 'Item 1', subtitle: 'Content 1' },
  ]);

  return (
    <>
      { items.map(item => (
        <motion.div key={item.id}>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    <motion.div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </motion.div>
  </>
  )
}
