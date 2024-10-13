"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: string
  title: string
  description: string
  company: string
  image: string
  date: string
  url: string
}

const newsItems: NewsItem[] = [
    {
    id: '9',
    title: 'El lanzamiento de Velora',
    description: 'HR Cool Festival: un viaje hacia el futuro de la gestión de talento con el lanzamiento de Velora',
    company: 'Velora HR',
    image: 'https://s10.s3c.es/imag/_v0/6016x3283/b/8/9/1200x655_HR-Cool-Festival.JPG',
    date: '2024-10-11',
    url: 'https://www.eleconomista.es/actualidad/noticias/13028773/10/24/hr-cool-festival-un-viaje-hacia-el-futuro-de-la-gestion-de-talento-con-el-lanzamiento-de-velora.html',
  },
    {
    id: '8',
    title: 'BCAS y MyInvestor se unen.',
    description: 'El acuerdo permite a los estudiantes financiados por BCAS acceder a una amplia gama de opciones financieras.',
    company: 'Bcas',
    image: 'https://emprendedores.es/wp-content/uploads/Equipo-Bcas.jpg.avif',
    date: '2024-10-01',
    url: 'https://emprendedores.es/formacion/bcas-y-myinvestor-soluciones-financieras-personalizadas-a-los-estudiantes/',
  },
  {
    id: '7',
    title: 'LinkedIn Top Startups 2024: las 20 empresas emergentes más prometedoras de España.',
    description: '#LinkedInNews has recognized Incapto as the third #TopStartups2024 nationwide in Spain.',
    company: 'Incapto',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQHxt_IYs6HWeg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727079602002?e=1732752000&v=beta&t=HKIUTQl8tuh2BePBUYZVP_a8TXnyTAbMcJeAEAo5k_Q',
    date: '2024-09-25',
    url: 'https://www.linkedin.com/pulse/linkedin-top-startups-2024-las-20-empresas-emergentes-7stzc/?trackingId=dtGmtvYbYeUpY%2Bq3VWqYZA%3D%3D',
  },
  {
    id: '6',
    title: 'Spanish edtech Bcas closes €17M round.',
    description: 'Spanish edtech Bcas to expand flexible financing solution for students.',
    company: 'Bcas',
    image: 'https://techfundingnews.com/wp-content/uploads/2024/06/Bcas-team.jpg',
    date: '2024-06-04',
    url: 'https://techfundingnews.com/spanish-edtech-bcas-scores-e17m-to-expand-flexible-financing-solution-for-students/',
  },
  {
    id: '5',
    title: 'Turiscool, el Netflix de las escuelas de turismo.',
    description: 'La plataforma de Turiscool permite a las empresas del canal HORECA ahorrar más de un 60% del tiempo de formación.',
    company: 'Turiscool',
    image: 'https://s1.elespanol.com/2024/02/15/invertia/disruptores-innovadores/disruptores/startups/832927398_239996684_1706x960.jpg',
    date: '2024-02-18',
    url: 'https://www.elespanol.com/invertia/disruptores-innovadores/disruptores/startups/20240218/escuela-hosteleria-online-ayuda-intur-fuerte-hoteles-tener-equipo-formado-motivado/832917132_0.html',
  },
  {
    id: '4',
    title: 'El gigante inmobiliario Engel & Völkers confia en Nester.',
    description: 'Nester ha pasado de gestionar 1.500 inmuebles a 20.000 en año y medio.',
    company: 'Nester',
    image: 'https://s1.elespanol.com/2024/03/04/invertia/observatorios/vivienda/837427010_240450668_1706x960.jpg',
    date: '2024-03-05',
    url: 'https://www.elespanol.com/invertia/observatorios/vivienda/20240305/espanola-nester-digitalizara-servicio-property-management-gigante-inmobiliario-engel-volkers/836416719_0.html',
  },
  {
    id: '3',
    title: 'Incapto consigue 6M€ para impulsar su actividad.',
    description: 'Francia, Italia y Portugal son los primeros mercados a los que se abre la startup catalana.',
    company: 'Incapto',
    image: 'https://elreferente.es/wp-content/uploads/2023/10/incapto-fundadores.jpg',
    date: '2023-10-02',
    url: 'https://elreferente.es/inversiones/incapto-consigue-6me-para-impulsar-su-actividad-internacional/',
  },
  {
    id: '2',
    title: 'Nester levanta una ronda de 1,2M€ para su expansión.',
    description: 'La proptech, especializada en software para la gestión de activos, entró en la aceleradora de (AWS) y se incorporó a Lanzadera en 2022.',
    company: 'Nester',
    image: 'https://www.ejeprime.com/files/2020/empresas/nester/FoundersB-728.jpg',
    date: '2023-11-10',
    url: 'https://www.ejeprime.com/files/2020/empresas/nester/FoundersB-728.jpg',
  },
  {
    id: '1',
    title: 'Hr bot factory cierra el 2022 aumentando su plantilla.',
    description: 'La IA de esta startup se encarga de los procesos de selección de Prosegur, SEUR, Grupo Dia y Quirónsalud.',
    company: 'HR Bot Factory',
    image: 'https://www.rrhhdigital.com/wp-content/uploads/userfiles/hrbotfactory-fundadores.jpg',
    date: '2023-02-23',
    url: 'https://www.rrhhdigital.com/secciones/startups/156506/Hr-bot-factory-cierra-el-2022-aumentando-su-plantilla-en-un-80-y-doblando-su-facturacion/',
  }

]

export default function PortfolioNewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Portfolio News</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-4">
              {newsItems.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] min-w-0 px-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Link href={item.url} className="mr-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={`${item.company} article image`}
                              fill
                              style={{ objectFit: 'cover' }}
                              unoptimized
                            />
                          </div>
                        </Link>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.company} • {new Date(item.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">{item.description}</p>
                      <Link 
                        href={item.url}
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  )
}
