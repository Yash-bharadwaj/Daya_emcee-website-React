import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'

interface ServiceData {
  id: string
  title: string
  description: string
}

interface ServicesData {
  title: string
  subtitle: string
  services: ServiceData[]
}

interface ServicesProps {
  data: ServicesData
}

export const Services: React.FC<ServicesProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.services[0]?.id || '')

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              {data.services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="text-sm md:text-base"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {data.services.map((service) => (
              <TabsContent 
                key={service.id} 
                value={service.id}
                className="mt-8"
              >
                <Card className="border-beam">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-center text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
} 