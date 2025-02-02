import { CopyApiRequestButton } from "@/components/copy-api-request-button";
import { BackgroundForm } from "@/components/forms/background";
import { FeatureSection } from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import PreviewRenderer from "@/components/preview-renderer";
import SaveImageButton from "@/components/save-image-button";
import TemplateForm from "@/components/template-form";
import TemplateSelector from "@/components/template-selector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoCircledIcon } from "@radix-ui/react-icons";



export default function Home() {
  return (
    <div>
      <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-4">
        <Hero />
      </div>

      <div id="get-started" className="mb-4"></div>

      {/* Top Advertisement */}
      {/* <div className="ad-container my-4 text-center min-h-[90px]">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
          data-ad-slot="XXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div> */}

      <div className="space-y-4">
        <TemplateSelector />

        <Separator />

        <section className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
          <div className="order-last col-span-1 space-y-4 lg:order-first">
            <TemplateForm />

            <BackgroundForm />

            {/* Sidebar Advertisement */}
            {/* <div className="ad-container my-4 text-center min-h-[250px]">
              <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
                data-ad-slot="XXXXX"
                data-ad-format="rectangle"
              />
            </div> */}
          </div>

          <div className="order-first lg:order-last lg:col-span-2">
            <div className="sticky top-0 grow-0 space-y-4">
              <Card className="col-span-2 px-2 md:px-4">
                <div className="overflow-hidden">
                  <PreviewRenderer />
                </div>
              </Card>

              {/* Bottom Advertisement */}
              {/* <div className="ad-container my-4 text-center min-h-[90px]">
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
                  data-ad-slot="XXXXX"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              </div> */}

              <Tabs defaultValue="save">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="save">Save Image</TabsTrigger>
                  <TabsTrigger value="format">Format Tips</TabsTrigger>
                  <TabsTrigger value="api">API Request</TabsTrigger>
                </TabsList>

                <TabsContent value="save">
                  <Card>
                    <CardHeader>
                      <CardTitle>Save Image</CardTitle>
                      <CardDescription>
                        Export the image as a PNG, JPEG or WebP.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-col items-start">
                        <p className="text-sm">
                          For optimal Open Graph (OG) Image display on social
                          media platforms like Twitter, Facebook, and LinkedIn,
                          use PNG (recommended), JPEG or WebP format.
                        </p>
                      </div>

                      <SaveImageButton />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="format">
                  <Card>
                    <CardHeader>
                      <CardTitle>Open Graph Image Format Tips</CardTitle>
                      <CardDescription>
                        Choose the optimal format for social media platforms.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-2">
                      <ul className="text-sm">
                        <li>PNG: Provides better quality for text and logos</li>
                        <li>
                          JPEG: Ideal for photographs and complex images with
                          many colors
                        </li>
                        <li>
                          WebP: Modern format offering excellent compression
                          while maintaining quality
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="api">
                  <Card>
                    <CardHeader>
                      <CardTitle>API Request</CardTitle>
                      <CardDescription>
                        Generate Open Graph images on the fly with our API.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between space-x-2">
                      <div className="flex items-center">
                        <InfoCircledIcon className="mr-2 h-4 w-4" />
                        <p className="text-sm">
                          Copy the request body as JSON or a cURL command.
                        </p>
                      </div>

                      <CopyApiRequestButton />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <FeatureSection />

        {/* <HowToAddSection /> */}
      </div>
    </div>
  )
}
