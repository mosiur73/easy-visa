"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { User, FileText, CreditCard, CheckCircle, Save, AlertCircle, Globe } from "lucide-react"
import Head from "next/head";



interface ApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  nationality: string
  passportNo: string
  passportExpiry: string
  visaType: string
  destinationCountry: string
  completedSteps: number[]
}

const visaTypes = [
  { value: "tourist", label: "Tourist Visa" },
  { value: "business", label: "Business Visa" },
  { value: "student", label: "Student Visa" },
  { value: "work", label: "Work Visa" },
  { value: "transit", label: "Transit Visa" },
  { value: "medical", label: "Medical Visa" },
  { value: "family", label: "Family Visa" },
  { value: "diplomatic", label: "Diplomatic Visa" },
]

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "sg", label: "Singapore" },
]

const applicationSteps = [
  {
    id: 0,
    title: "Personal Information",
    description: "Complete your basic details",
    icon: User,
  },
  {
    id: 1,
    title: "Passport Information",
    description: "Enter your passport details",
    icon: FileText,
  },
  {
    id: 2,
    title: "Visa Information",
    description: "Specify your visa requirements",
    icon: Globe,
  },
  {
    id: 3,
    title: "Document Upload",
    description: "Upload required documents",
    icon: FileText,
  },
  {
    id: 4,
    title: "Payment",
    description: "Complete visa fee payment",
    icon: CreditCard,
  },
  {
    id: 5,
    title: "Review & Submit",
    description: "Final review and submission",
    icon: CheckCircle,
  },
]

export default function MyApplicationPage() {
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    passportNo: "",
    passportExpiry: "",
    visaType: "",
    destinationCountry: "",
    completedSteps: [],
  })
  const [loading, setLoading] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const savedData = localStorage.getItem("visaApplication")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setApplicationData({
          firstName: parsedData.firstName || "",
          lastName: parsedData.lastName || "",
          email: parsedData.email || "",
          phone: parsedData.phone || "",
          dateOfBirth: parsedData.dateOfBirth || "",
          nationality: parsedData.nationality || "",
          passportNo: parsedData.passportNo || "",
          passportExpiry: parsedData.passportExpiry || "",
          visaType: parsedData.visaType || "",
          destinationCountry: parsedData.destinationCountry || "",
          completedSteps: Array.isArray(parsedData.completedSteps) ? parsedData.completedSteps : [],
        })
      } catch (error) {
        console.error("Error parsing saved application data:", error)
   
      }
    }
  }, [])

  const saveToLocalStorage = (data: ApplicationData) => {
    localStorage.setItem("visaApplication", JSON.stringify(data))
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!applicationData.firstName.trim()) {
      errors.firstName = "First name is required"
    }
    if (!applicationData.lastName.trim()) {
      errors.lastName = "Last name is required"
    }
    if (!applicationData.email.trim()) {
      errors.email = "Email is required"
    }
    if (!applicationData.passportNo.trim()) {
      errors.passportNo = "Passport number is required"
    }
    if (!applicationData.visaType) {
      errors.visaType = "Please select a visa type"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fix the form errors before saving")
      return
    }

    setLoading(true)
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1000))

      saveToLocalStorage(applicationData)
      setFormErrors({}) 
      toast.success("Application details saved successfully! Your progress has been saved.")
    } catch (error) {
      toast.error("Failed to save application details. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleStepToggle = (stepId: number, checked: boolean) => {
    const updatedSteps = checked
      ? [...applicationData.completedSteps, stepId]
      : applicationData.completedSteps.filter((step) => step !== stepId)

    const updatedData = {
      ...applicationData,
      completedSteps: updatedSteps,
    }
    setApplicationData(updatedData)
    saveToLocalStorage(updatedData)

    toast.success(checked ? "Step marked as completed!" : "Step marked as incomplete")
  }

  const progressPercentage = Math.round((applicationData.completedSteps.length / applicationSteps.length) * 100)

  return (
    <div className="min-h-screen bg-background text-foreground">
     
       <Head>
        <title>Visa Service Portal | Home</title>
        <meta name="description" content="Explore visa services and track your application easily." />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent mb-2">
            My Visa Application
          </h1>
          <p className="text-muted-foreground text-lg">Track your application progress and manage your details</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Section */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <User className="h-5 w-5 text-primary" />
                  Personal Information
                </CardTitle>
                <CardDescription>Provide your personal details as they appear on your passport</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      value={applicationData.firstName}
                      onChange={(e) => setApplicationData({ ...applicationData, firstName: e.target.value })}
                      className={`bg-background border-input text-foreground placeholder:text-muted-foreground ${formErrors.firstName ? "border-destructive" : ""}`}
                    />
                    {formErrors.firstName && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      value={applicationData.lastName}
                      onChange={(e) => setApplicationData({ ...applicationData, lastName: e.target.value })}
                      className={`bg-background border-input text-foreground placeholder:text-muted-foreground ${formErrors.lastName ? "border-destructive" : ""}`}
                    />
                    {formErrors.lastName && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                      className={`bg-background border-input text-foreground placeholder:text-muted-foreground ${formErrors.email ? "border-destructive" : ""}`}
                    />
                    {formErrors.email && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-foreground">
                      Date of Birth <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={applicationData.dateOfBirth}
                      onChange={(e) => setApplicationData({ ...applicationData, dateOfBirth: e.target.value })}
                      className="bg-background border-input text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nationality" className="text-foreground">
                      Nationality <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nationality"
                      placeholder="Enter your nationality"
                      value={applicationData.nationality}
                      onChange={(e) => setApplicationData({ ...applicationData, nationality: e.target.value })}
                      className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Passport Information Section */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <FileText className="h-5 w-5 text-primary" />
                  Passport Information
                </CardTitle>
                <CardDescription>Enter your passport details exactly as they appear on your passport</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passportNo" className="text-foreground">
                      Passport Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="passportNo"
                      placeholder="Enter passport number"
                      value={applicationData.passportNo}
                      onChange={(e) =>
                        setApplicationData({
                          ...applicationData,
                          passportNo: e.target.value.toUpperCase(),
                        })
                      }
                      className={`bg-background border-input text-foreground placeholder:text-muted-foreground ${formErrors.passportNo ? "border-destructive" : ""}`}
                    />
                    {formErrors.passportNo && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.passportNo}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="passportExpiry" className="text-foreground">
                      Passport Expiry Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="passportExpiry"
                      type="date"
                      value={applicationData.passportExpiry}
                      onChange={(e) => setApplicationData({ ...applicationData, passportExpiry: e.target.value })}
                      className="bg-background border-input text-foreground"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visa Information Section */}
            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Globe className="h-5 w-5 text-primary" />
                  Visa Information
                </CardTitle>
                <CardDescription>Specify your visa requirements and travel details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="visa-type" className="text-foreground">
                      Visa Type <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={applicationData.visaType || ""} // Ensure value is never undefined
                      onValueChange={(value) => setApplicationData({ ...applicationData, visaType: value })}
                    >
                      <SelectTrigger
                        className={`bg-background border-input text-foreground ${formErrors.visaType ? "border-destructive" : ""}`}
                      >
                        <SelectValue placeholder="Select visa type" className="text-muted-foreground" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {visaTypes.map((type) => (
                          <SelectItem
                            key={type.value}
                            value={type.value}
                            className="text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                          >
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formErrors.visaType && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {formErrors.visaType}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-foreground">
                      Destination Country <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={applicationData.destinationCountry || ""} // Ensure value is never undefined
                      onValueChange={(value) => setApplicationData({ ...applicationData, destinationCountry: value })}
                    >
                      <SelectTrigger className="bg-background border-input text-foreground">
                        <SelectValue placeholder="Select destination" className="text-muted-foreground" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {countries.map((country) => (
                          <SelectItem
                            key={country.value}
                            value={country.value}
                            className="text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                          >
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={handleFormSubmit}
                  disabled={loading}
                  className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {loading ? "Saving..." : "Save Application Details"}
                </Button>
              </CardContent>
            </Card>

            {/* Application Summary */}
            {(applicationData.firstName ||
              applicationData.lastName ||
              applicationData.passportNo ||
              applicationData.visaType) && (
              <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Application Summary</CardTitle>
                  <CardDescription>Review your submitted information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 rounded-lg bg-muted/50 border border-border">
                      <User className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold mb-1 text-foreground">Applicant Name</p>
                      <p className="text-sm text-muted-foreground">
                        {applicationData.firstName && applicationData.lastName
                          ? `${applicationData.firstName} ${applicationData.lastName}`
                          : "Not provided"}
                      </p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50 border border-border">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold mb-1 text-foreground">Passport Number</p>
                      <p className="text-sm text-muted-foreground">{applicationData.passportNo || "Not provided"}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50 border border-border">
                      <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold mb-1 text-foreground">Visa Type</p>
                      <p className="text-sm text-muted-foreground">
                        {visaTypes.find((type) => type.value === applicationData.visaType)?.label || "Not selected"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-card-foreground">
                  Application Progress
                  <Badge
                    variant={progressPercentage === 100 ? "default" : "secondary"}
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {progressPercentage}% Complete
                  </Badge>
                </CardTitle>
                <CardDescription>Track your application status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Progress</span>
                    <span className="text-muted-foreground">
                      {applicationData.completedSteps.length} of {applicationSteps.length} steps
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2 bg-secondary" />
                </div>

                <Separator className="bg-border" />

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Application Steps</h4>
                  {applicationSteps.map((step) => {
                    const Icon = step.icon
                    const isCompleted = applicationData.completedSteps.includes(step.id)

                    return (
                      <div key={step.id} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            isCompleted ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {isCompleted ? <CheckCircle className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-medium ${
                              isCompleted ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {step.title}
                          </p>
                          <p className="text-xs text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Separator className="bg-border" />

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Mark Completed Steps</h4>
                  {applicationSteps.map((step) => {
                    const Icon = step.icon
                    const isCompleted = applicationData.completedSteps.includes(step.id)

                    return (
                      <div
                        key={step.id}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors bg-card"
                      >
                        <Checkbox
                          id={`step-${step.id}`}
                          checked={isCompleted}
                          onCheckedChange={(checked) => handleStepToggle(step.id, checked as boolean)}
                          className="border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Icon className="h-4 w-4 text-primary" />
                        <Label htmlFor={`step-${step.id}`} className="flex-1 cursor-pointer text-foreground">
                          {step.title}
                        </Label>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Our visa experts are here to assist you with your application.
                </p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Chat with Expert
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    View FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

     
    </div>
  )
}
