import React from 'react';
import { Bell, Calendar, MessageCircle, Users, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MindCareLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">MindCare</span>
          </div>
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="#servicios" className="hover:text-teal-600">Servicios</a>
            <a href="#profesionales" className="hover:text-teal-600">Profesionales</a>
            <a href="#planes" className="hover:text-teal-600">Planes</a>
            <a href="#recursos" className="hover:text-teal-600">Recursos</a>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="hidden md:block">Iniciar Sesión</Button>
            <Button className="bg-teal-600 hover:bg-teal-700">Comenzar</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tu bienestar mental,<br />a un click de distancia
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conectamos a personas con profesionales de salud mental certificados a través de una plataforma segura y accesible.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6">
              Programa tu primera sesión
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Conoce nuestros planes
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <MessageCircle className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Terapia Virtual</h3>
                <p className="text-gray-600">Sesiones privadas por videollamada con profesionales certificados.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Grupos de Apoyo</h3>
                <p className="text-gray-600">Talleres y sesiones grupales sobre temas específicos.</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Recursos Online</h3>
                <p className="text-gray-600">Biblioteca de contenido y ejercicios para tu desarrollo personal.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Planes Accesibles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Plan Básico</h3>
                <p className="text-3xl font-bold mb-4">$29<span className="text-lg text-gray-600">/mes</span></p>
                <ul className="space-y-3 text-gray-600">
                  <li>1 sesión mensual</li>
                  <li>Acceso a recursos básicos</li>
                  <li>Chat de soporte</li>
                </ul>
                <Button className="w-full mt-6">Comenzar</Button>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-teal-600">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Plan Premium</h3>
                <p className="text-3xl font-bold mb-4">$79<span className="text-lg text-gray-600">/mes</span></p>
                <ul className="space-y-3 text-gray-600">
                  <li>4 sesiones mensuales</li>
                  <li>Acceso completo a recursos</li>
                  <li>Grupos de apoyo ilimitados</li>
                  <li>Soporte prioritario 24/7</li>
                </ul>
                <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">Comenzar</Button>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Plan Empresarial</h3>
                <p className="text-3xl font-bold mb-4">Personalizado</p>
                <ul className="space-y-3 text-gray-600">
                  <li>Sesiones ilimitadas</li>
                  <li>Portal empresarial</li>
                  <li>Reportes y análisis</li>
                  <li>Account Manager dedicado</li>
                </ul>
                <Button variant="outline" className="w-full mt-6">Contactar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">100% Confidencial</h4>
              <p className="text-gray-600">Plataforma segura y encriptada</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Profesionales Certificados</h4>
              <p className="text-gray-600">Psicólogos con amplia experiencia</p>
            </div>
            <div>
              <Bell className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Soporte 24/7</h4>
              <p className="text-gray-600">Estamos aquí para ayudarte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold mb-4">MindCare</h5>
            <p className="text-gray-400">Tu plataforma de bienestar mental online</p>
          </div>
          <div>
            <h5 className="font-bold mb-4">Servicios</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Terapia Individual</li>
              <li>Grupos de Apoyo</li>
              <li>Recursos</li>
              <li>Empresas</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Compañía</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nosotros</li>
              <li>Profesionales</li>
              <li>Blog</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Términos de Uso</li>
              <li>Privacidad</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MindCareLanding;
