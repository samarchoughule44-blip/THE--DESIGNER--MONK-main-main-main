import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://super-disco-the-designer-monk-production.up.railway.app/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `City: ${formData.city}\nProject Type: ${formData.projectType}\nMessage: ${formData.message}`,
          source: 'Contact Page'
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          projectType: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 98678 89580",
      subdetail: "Mon-Sat, 9:00 AM - 7:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "hello@thedesignermonk.com",
      subdetail: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "123 Design Street, Bandra West",
      subdetail: "Mumbai, Maharashtra 400050",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday - Saturday",
      subdetail: "9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Ready to transform your space? Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      placeholder="Enter your phone number"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      placeholder="Enter your email address"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      required
                      placeholder="Enter your city"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleChange("projectType", value)}
                      required
                    >
                      <SelectTrigger className="mt-2 border border-gray-400">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-home">Full Home Interior</SelectItem>
                        <SelectItem value="kitchen">Modular Kitchen</SelectItem>
                        <SelectItem value="living">Living Room</SelectItem>
                        <SelectItem value="bedroom">Bedroom</SelectItem>
                        <SelectItem value="furniture">Custom Furniture</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="consultation">Just Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label  htmlFor="message">Your Message</Label>
                  <Textarea
                  
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Write your message here..."
                    className="mt-2 min-h-[120px] border border-gray-400"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </Card>

            {/* Map */}
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                <p className="text-muted-foreground mb-6">
                  Drop by our design studio to explore material samples, view our portfolio, and meet our team. We recommend scheduling an appointment for personalized attention.
                </p>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709658!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <info.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-foreground mb-1">{info.detail}</p>
                <p className="text-sm text-muted-foreground">{info.subdetail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Quick Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Most clients hear back from us within 24 hours. For urgent inquiries, please call us directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+91 98678 89580">
                <Button variant="outline" size="lg">
                  <Phone className="mr-2" size={18} />
                  Call Now
                </Button>
              </a>
              <a href="mailto:Support@thedesignermonk.in">
                <Button variant="outline" size="lg">
                  <Mail className="mr-2" size={18} />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
