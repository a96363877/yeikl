import Link from "next/link"
import Image from "next/image"
import {
  CreditCard,
  HelpCircle,
  Menu,
  Phone,
  HomeIcon,
  Globe,
  FileText,
  ChevronRight,
  MapPin,
  Mail,
  Clock,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { LiveChat } from "@/components/live-chat"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white" dir="rtl">
      {/* Top Bar */}
      <div className="w-full bg-gray-100 py-2 border-b">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-red-600 flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>خدمة العملاء: 107</span>
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" className="text-gray-600 hover:text-red-600 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>مواقع الفروع</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-600 hover:text-red-600">
              English
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="#" className="text-gray-600 hover:text-red-600">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-red-600">
                <span className="sr-only">Zain Kuwait</span>
                <div className="flex h-full w-full items-center justify-center text-white font-bold">Z</div>
              </div>
              <span className="hidden font-bold text-xl sm:inline-block">زين الكويت</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                الرئيسية
              </Link>
              <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                الخدمات
              </Link>
              <Link
                href="#payment-methods"
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                دفع الفواتير
              </Link>
              <Link href="#terms" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                الدعم
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute right-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="ابحث هنا..."
                className="w-[200px] pl-3 pr-9 rounded-full border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <Button className="hidden md:flex bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-right flex items-center gap-2 justify-end">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full bg-red-600">
                      <div className="flex h-full w-full items-center justify-center text-white font-bold">Z</div>
                    </div>
                    زين الكويت
                  </SheetTitle>
                </SheetHeader>
                <div className="relative mt-6">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="ابحث هنا..." className="pl-3 pr-9 rounded-full border-gray-300" />
                </div>
                <nav className="flex flex-col gap-4 mt-8 text-right">
                  <Link
                    href="#"
                    className="flex items-center justify-end gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-100"
                  >
                    الرئيسية
                    <HomeIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="flex items-center justify-end gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-100"
                  >
                    الخدمات
                    <Globe className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#payment-methods"
                    className="flex items-center justify-end gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-100"
                  >
                    دفع الفواتير
                    <CreditCard className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#terms"
                    className="flex items-center justify-end gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-100"
                  >
                    الشروط والأحكام
                    <FileText className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center justify-end gap-2 text-sm font-medium p-2 rounded-md hover:bg-gray-100"
                  >
                    الدعم
                    <HelpCircle className="h-4 w-4" />
                  </Link>
                  <Separator className="my-2" />
                  <Button className="mt-2 bg-red-600 hover:bg-red-700">تسجيل الدخول</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-right">
                <Badge className="bg-white text-red-600 hover:bg-gray-100">شركة الاتصالات الرائدة في الكويت</Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">زين الكويت</h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-[600px]">
                  نقدم لكم أفضل خدمات الاتصالات والإنترنت بأحدث التقنيات وأعلى مستويات الجودة لنضمن لكم تجربة اتصال
                  استثنائية
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    استكشف خدماتنا
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    تواصل معنا
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative h-[400px] w-full">
                  <Image src="/placeholder.svg?height=400&width=500" alt="زين الكويت" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">دفع الفواتير</h3>
                  <p className="text-sm text-gray-500 mb-4">ادفع فواتيرك بسهولة وأمان</p>
                  <Link href="#payment-methods" className="text-red-600 text-sm font-medium flex items-center">
                    المزيد
                    <ChevronRight className="h-4 w-4 mr-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">باقات الإنترنت</h3>
                  <p className="text-sm text-gray-500 mb-4">اختر الباقة المناسبة لاحتياجاتك</p>
                  <Link href="#services" className="text-red-600 text-sm font-medium flex items-center">
                    المزيد
                    <ChevronRight className="h-4 w-4 mr-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">خدمة العملاء</h3>
                  <p className="text-sm text-gray-500 mb-4">نحن هنا لمساعدتك على مدار الساعة</p>
                  <Link href="#" className="text-red-600 text-sm font-medium flex items-center">
                    المزيد
                    <ChevronRight className="h-4 w-4 mr-1" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-100 hover:border-red-500 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">مواقع الفروع</h3>
                  <p className="text-sm text-gray-500 mb-4">ابحث عن أقرب فرع إليك</p>
                  <Link href="#" className="text-red-600 text-sm font-medium flex items-center">
                    المزيد
                    <ChevronRight className="h-4 w-4 mr-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50" id="payment-methods">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-end gap-4 mb-12">
              <Badge className="bg-red-100 text-red-600 hover:bg-red-200">طرق الدفع</Badge>
              <div className="space-y-2 text-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">طرق دفع الفواتير</h2>
                <p className="max-w-[700px] text-gray-500 text-lg">
                  نقدم لكم العديد من الطرق السهلة والمريحة لدفع فواتيركم في أي وقت ومن أي مكان
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-right bg-gradient-to-r from-red-50 to-white rounded-t-lg pb-2">
                  <CardTitle className="flex items-center justify-end gap-2 text-red-600">
                    <Phone className="h-5 w-5" />
                    التطبيق الإلكتروني
                  </CardTitle>
                  <CardDescription className="text-right">الطريقة الأسرع والأكثر أماناً لدفع الفواتير</CardDescription>
                </CardHeader>
                <CardContent className="text-right pt-6">
                  <ol className="list-decimal list-inside space-y-3 mr-4 text-gray-700">
                    <li>قم بتحميل تطبيق زين الكويت من متجر التطبيقات</li>
                    <li>سجل الدخول إلى حسابك باستخدام رقم الهاتف وكلمة المرور</li>
                    <li>اختر "دفع الفواتير" من القائمة الرئيسية</li>
                    <li>اختر الفاتورة المراد دفعها من قائمة الفواتير المستحقة</li>
                    <li>اختر طريقة الدفع المناسبة (بطاقة ائتمان، K-net، إلخ)</li>
                    <li>أكمل عملية الدفع واحتفظ بإيصال الدفع الإلكتروني</li>
                  </ol>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    تحميل التطبيق
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-right bg-gradient-to-r from-red-50 to-white rounded-t-lg pb-2">
                  <CardTitle className="flex items-center justify-end gap-2 text-red-600">
                    <Globe className="h-5 w-5" />
                    الموقع الإلكتروني
                  </CardTitle>
                  <CardDescription className="text-right">دفع الفواتير مباشرة من موقعنا الإلكتروني</CardDescription>
                </CardHeader>
                <CardContent className="text-right pt-6">
                  <ol className="list-decimal list-inside space-y-3 mr-4 text-gray-700">
                    <li>قم بزيارة موقع زين الكويت الإلكتروني الرسمي</li>
                    <li>سجل الدخول إلى حسابك الشخصي</li>
                    <li>انتقل إلى صفحة "دفع الفواتير" من القائمة الرئيسية</li>
                    <li>اختر الفاتورة المراد دفعها من قائمة الفواتير المستحقة</li>
                    <li>اختر طريقة الدفع المناسبة وأدخل بيانات الدفع المطلوبة</li>
                    <li>أكمل عملية الدفع وقم بتحميل أو طباعة إيصال الدفع</li>
                  </ol>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    زيارة الموقع
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-right bg-gradient-to-r from-red-50 to-white rounded-t-lg pb-2">
                  <CardTitle className="flex items-center justify-end gap-2 text-red-600">
                    <MapPin className="h-5 w-5" />
                    فروع زين
                  </CardTitle>
                  <CardDescription className="text-right">
                    زيارة أحد فروعنا المنتشرة في جميع أنحاء الكويت
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-right pt-6">
                  <ol className="list-decimal list-inside space-y-3 mr-4 text-gray-700">
                    <li>قم بزيارة أقرب فرع لزين الكويت في منطقتك</li>
                    <li>اصطحب معك بطاقة الهوية المدنية أو جواز السفر</li>
                    <li>توجه إلى موظف خدمة العملاء واطلب دفع الفاتورة</li>
                    <li>يمكنك الدفع نقداً أو باستخدام بطاقة الائتمان أو K-net</li>
                    <li>سيقوم الموظف بتزويدك بإيصال الدفع الرسمي</li>
                    <li>احتفظ بإيصال الدفع كمرجع للمستقبل</li>
                  </ol>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                    مواقع الفروع
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-16 md:py-24" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-end gap-4 mb-12">
              <Badge className="bg-red-100 text-red-600 hover:bg-red-200">خدماتنا</Badge>
              <div className="space-y-2 text-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">خدمات زين الكويت</h2>
                <p className="max-w-[700px] text-gray-500 text-lg">
                  نقدم لكم مجموعة متنوعة من الخدمات المتميزة لتلبية احتياجاتكم الشخصية والمهنية
                </p>
              </div>
            </div>
            <Tabs defaultValue="mobile" className="text-right">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="mobile" className="text-base">
                  خدمات الجوال
                </TabsTrigger>
                <TabsTrigger value="internet" className="text-base">
                  خدمات الإنترنت
                </TabsTrigger>
                <TabsTrigger value="other" className="text-base">
                  خدمات متخصصة
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mobile" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 text-right">
                    <h3 className="text-2xl font-bold text-gray-900">باقات وخدمات الجوال</h3>
                    <p className="text-gray-600">
                      توفر زين الكويت مجموعة متنوعة من باقات وخدمات الهاتف المحمول المصممة لتلبية احتياجات جميع العملاء،
                      سواء للاستخدام الشخصي أو التجاري. تتميز باقاتنا بأسعار تنافسية وخدمات متميزة تضمن لك تجربة اتصال
                      فائقة الجودة.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>باقات الدفع الآجل بمزايا حصرية ومرونة في الاستخدام</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>باقات الدفع المسبق بخيارات متعددة تناسب ميزانيتك</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات التجوال الدولي في أكثر من 180 دولة حول العالم</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>باقات المكالمات الدولية بأسعار تنافسية لجميع الوجهات</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات القيمة المضافة لتعزيز تجربة استخدام الهاتف المحمول</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                    </ul>
                    <Button className="bg-red-600 hover:bg-red-700">استكشف باقات الجوال</Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="خدمات الجوال"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="internet" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 text-right">
                    <h3 className="text-2xl font-bold text-gray-900">باقات وخدمات الإنترنت</h3>
                    <p className="text-gray-600">
                      توفر زين الكويت باقات إنترنت سريعة وموثوقة لتلبية احتياجات الأفراد والشركات. سواء كنت تبحث عن
                      إنترنت م��زلي أو متنقل، نحن نقدم حلولاً متكاملة بأحدث التقنيات وأعلى سرعات الاتصال.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>باقات الإنترنت المنزلي بسرعات فائقة وبدون انقطاع</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>باقات الإنترنت المتنقل لتبقى متصلاً أينما كنت</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات الواي فاي المنزلي بتغطية شاملة لجميع أنحاء المنزل</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات الألياف البصرية بسرعات تصل إلى 1 جيجابت في الثانية</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>باقات الإنترنت للشركات مع حلول مخصصة لاحتياجات الأعمال</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                    </ul>
                    <Button className="bg-red-600 hover:bg-red-700">استكشف باقات الإنترنت</Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="خدمات الإنترنت"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6 text-right">
                    <h3 className="text-2xl font-bold text-gray-900">الخدمات المتخصصة</h3>
                    <p className="text-gray-600">
                      تقدم زين الكويت مجموعة من الخدمات المتخصصة التي تلبي احتياجات مختلف شرائح العملاء، بدءاً من خدمات
                      الترفيه وحتى حلول الأعمال المتكاملة والخدمات السحابية المتطورة.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات الترفيه مع باقات متنوعة من المحتوى الرقمي</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>حلول الأعمال المتكاملة للشركات الصغيرة والمتوسطة والكبيرة</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات الحماية والأمان لحماية بياناتك ومعلوماتك الشخصية</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>خدمات الدعم الفني المتخصص على مدار الساعة</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                      <li className="flex items-center justify-end gap-2 text-gray-700">
                        <span>الخدمات السحابية وحلول تخزين البيانات المتطورة</span>
                        <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                          <ChevronRight className="h-3 w-3 text-red-600" />
                        </div>
                      </li>
                    </ul>
                    <Button className="bg-red-600 hover:bg-red-700">استكشف الخدمات المتخصصة</Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="الخدمات المتخصصة"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50" id="terms">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-end gap-4 mb-12">
              <Badge className="bg-red-100 text-red-600 hover:bg-red-200">الشروط والأحكام</Badge>
              <div className="space-y-2 text-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">الشروط والأحكام</h2>
                <p className="max-w-[700px] text-gray-500 text-lg">
                  يرجى قراءة الشروط والأحكام بعناية قبل استخدام خدماتنا للتعرف على حقوقك والتزاماتك
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-right text-lg font-medium hover:text-red-600 transition-colors">
                    شروط الاستخدام العامة
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-600 pt-4">
                    <p className="mb-4">
                      باستخدامك لخدمات زين الكويت، فإنك توافق على الالتزام بهذه الشروط والأحكام. تحتفظ زين الكويت بالحق
                      في تعديل هذه الشروط والأحكام في أي وقت، وسيتم إخطار المستخدمين بالتغييرات عبر الموقع الإلكتروني أو
                      التطبيق.
                    </p>
                    <p className="mb-4">
                      يجب على المستخدمين مراجعة هذه الشروط بانتظام للبقاء على اطلاع بأي تغييرات. استمرار استخدام الخدمات
                      بعد إجراء أي تغييرات على الشروط والأحكام يعتبر موافقة على هذه التغييرات.
                    </p>
                    <p>
                      تلتزم زين الكويت بتقديم خدمات ذات جودة عالية، ولكنها لا تضمن أن الخدمات ستكون متاحة بشكل مستمر أو
                      خالية من الأخطاء. سنبذل قصارى جهدنا لإصلاح أي أعطال في أقرب وقت ممكن.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-right text-lg font-medium hover:text-red-600 transition-colors">
                    سياسة الدفع والفواتير
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-600 pt-4">
                    <p className="mb-4">
                      يجب دفع جميع الفواتير في موعدها المحدد. في حالة التأخر عن السداد، قد يتم فرض رسوم إضافية أو تعليق
                      الخدمة. يمكن للعملاء دفع الفواتير من خلال التطبيق، الموقع الإلكتروني، أو زيارة أحد فروع زين
                      الكويت.
                    </p>
                    <p className="mb-4">
                      تصدر الفواتير شهرياً وتتضمن تفاصيل الاستخدام والرسوم المستحقة. يمكن للعملاء الاطلاع على تفاصيل
                      الفواتير من خلال حسابهم الشخصي على الموقع الإلكتروني أو التطبيق.
                    </p>
                    <p>
                      في حالة وجود أي استفسارات بخصوص الفواتير، يرجى الاتصال بخدمة العملاء على الرقم 107 أو زيارة أقرب
                      فرع لزين الكويت.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-right text-lg font-medium hover:text-red-600 transition-colors">
                    سياسة الخصوصية
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-600 pt-4">
                    <p className="mb-4">
                      تلتزم زين الكويت بحماية خصوصية عملائها. نحن نجمع ونستخدم المعلومات الشخصية وفقًا لسياسة الخصوصية
                      الخاصة بنا. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، إلا إذا كان ذلك مطلوبًا بموجب
                      القانون.
                    </p>
                    <p className="mb-4">
                      نستخدم المعلومات الشخصية لتقديم وتحسين خدماتنا، وإرسال إشعارات مهمة، وتوفير الدعم الفني، وتخصيص
                      تجربة المستخدم. نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو الإفصاح.
                    </p>
                    <p>
                      يمكنك الاطلاع على سياسة الخصوصية الكاملة على موقعنا الإلكتروني. إذا كان لديك أي استفسارات بخصوص
                      خصوصيتك، يرجى التواصل معنا عبر البريد الإلكتروني privacy@kw.zain.com.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-200 py-4">
                  <AccordionTrigger className="text-right text-lg font-medium hover:text-red-600 transition-colors">
                    شروط الإلغاء والاسترداد
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-600 pt-4">
                    <p className="mb-4">
                      يمكن للعملاء إلغاء خدماتهم في أي وقت، ولكن قد تطبق رسوم الإلغاء المبكر إذا كان العميل ملتزمًا بعقد.
                      يتم احتساب رسوم الإلغاء المبكر بناءً على المدة المتبقية من العقد.
                    </p>
                    <p className="mb-4">
                      لا يتم استرداد الرسوم الشهرية المدفوعة مسبقًا في حالة الإلغاء قبل نهاية فترة الفوترة. في حالة وجود
                      رصيد متبقي في حسابات الدفع المسبق، يمكن للعملاء طلب استرداد هذا الرصيد وفقًا لسياسة الاسترداد
                      المعمول بها.
                    </p>
                    <p>
                      لإلغاء الخدمة، يرجى زيارة أقرب فرع لزين الكويت أو الاتصال بخدمة العملاء على الرقم 107. سيتم معالجة
                      طلب الإلغاء في غضون 5 أيام عمل.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="py-4">
                  <AccordionTrigger className="text-right text-lg font-medium hover:text-red-600 transition-colors">
                    حدود المسؤولية
                  </AccordionTrigger>
                  <AccordionContent className="text-right text-gray-600 pt-4">
                    <p className="mb-4">
                      لا تتحمل زين الكويت المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدام
                      خدماتنا. نحن نبذل قصارى جهدنا لضمان توفر الخدمة واستمراريتها، ولكن لا يمكننا ضمان عدم حدوث
                      انقطاعات أو أخطاء.
                    </p>
                    <p className="mb-4">
                      في حالة حدوث انقطاع في الخدمة، سنعمل على استعادتها في أقرب وقت ممكن. لا تتحمل زين الكويت المسؤولية
                      عن أي خسائر أو أضرار ناتجة عن استخدام أو عدم القدرة على استخدام خدماتنا.
                    </p>
                    <p>
                      تقتصر مسؤوليتنا القصوى تجاهك على المبلغ الذي دفعته مقابل الخدمة خلال الشهر الذي حدث فيه الضرر. لا
                      تسمح بعض الولايات القضائية باستبعاد أو تقييد المسؤولية عن الأضرار التبعية أو العرضية، لذلك قد لا
                      تنطبق القيود المذكورة أعلاه عليك.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-end gap-4 mb-12">
              <Badge className="bg-red-100 text-red-600 hover:bg-red-200">اتصل بنا</Badge>
              <div className="space-y-2 text-right">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">تواصل معنا</h2>
                <p className="max-w-[700px] text-gray-500 text-lg">
                  فريق خدمة العملاء لدينا متاح على مدار الساعة للإجابة على استفساراتك وتقديم المساعدة
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">اتصل بنا</h3>
                  <p className="text-gray-500 mb-4">خدمة العملاء متاحة على مدار الساعة</p>
                  <p className="text-lg font-medium text-red-600">107</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-500 mb-4">أرسل لنا استفسارك عبر البريد الإلكتروني</p>
                  <p className="text-lg font-medium text-red-600">info@kw.zain.com</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
                  <p className="text-gray-500 mb-4">ساعات عمل فروعنا</p>
                  <p className="text-lg font-medium">السبت - الخميس: 9:00 ص - 10:00 م</p>
                  <p className="text-lg font-medium">الجمعة: 2:00 م - 10:00 م</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-gray-900 text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-red-600">
                  <div className="flex h-full w-full items-center justify-center text-white font-bold">Z</div>
                </div>
                <span className="font-bold text-xl">زين الكويت</span>
              </Link>
              <p className="text-gray-400 text-sm">
                شركة الاتصالات الرائدة في الكويت، نقدم لكم أفضل خدمات الاتصالات والإنترنت بأحدث التقنيات وأعلى مستويات
                الجودة.
              </p>
            </div>
            <div className="space-y-4 text-right">
              <h3 className="text-lg font-bold mb-2">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href="#payment-methods" className="text-gray-400 hover:text-white transition-colors">
                    دفع الفواتير
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                    الشروط والأحكام
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    الأسئلة الشائعة
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-right">
              <h3 className="text-lg font-bold mb-2">خدمات العملاء</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    الدعم الفني
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    مواقع الفروع
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    تتبع الطلبات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    الشكاوى والاقتراحات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-right">
              <h3 className="text-lg font-bold mb-2">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-end gap-2 text-gray-400">
                  <span>خدمة العملاء: 107</span>
                  <Phone className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-end gap-2 text-gray-400">
                  <span>info@kw.zain.com</span>
                  <Mail className="h-4 w-4" />
                </li>
                <li className="flex items-center justify-end gap-2 text-gray-400">
                  <span>الكويت، مدينة الكويت</span>
                  <MapPin className="h-4 w-4" />
                </li>
              </ul>
              <div className="flex justify-end gap-4 mt-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-800 my-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} زين الكويت. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                سياسة ملفات تعريف الارتباط
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat Component */}
      <LiveChat />
    </div>
  )
}
