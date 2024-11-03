import React from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  MessageCircle, 
  Users, 
  Bell,
  Search,
  ChevronRight,
  Video
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DashboardView = () => {
  const nextSession = {
    therapist: "Dra. María González",
    date: "4 Nov 2024",
    time: "15:30",
    type: "Individual"
  };

  const upcomingWorkshops = [
    {
      title: "Manejo del Estrés",
      date: "6 Nov 2024",
      participants: 12,
      spots: 15
    },
    {
      title: "Mindfulness Básico",
      date: "8 Nov 2024",
      participants: 8,
      spots: 15
    }
  ];

  const resources = [
    {
      title: "Técnicas de Respiración",
      type: "Video",
      duration: "15 min"
    },
    {
      title: "Diario de Gratitud",
      type: "Ejercicio",
      duration: "5 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <span className="text-xl font-bold text-gray-800">MindCare</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Buscar recursos..." 
                className="pl-10 pr-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <Button variant="ghost" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Bienvenido de vuelta, Juan</h1>
          <p className="text-gray-600">Continúa tu camino hacia el bienestar mental</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Video className="mr-2 w-4 h-4" />
            Nueva Sesión
          </Button>
          <Button variant="outline">
            <Users className="mr-2 w-4 h-4" />
            Unirse a Grupo
          </Button>
          <Button variant="outline">
            <MessageCircle className="mr-2 w-4 h-4" />
            Chat Rápido
          </Button>
          <Button variant="outline">
            <BookOpen className="mr-2 w-4 h-4" />
            Recursos
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Next Session Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Próxima Sesión</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium">{nextSession.therapist}</p>
                      <p className="text-sm text-gray-500">{nextSession.type}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Unirse
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {nextSession.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {nextSession.time}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Workshops */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Talleres Próximos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingWorkshops.map((workshop, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{workshop.title}</p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.date}</span>
                        <span>•</span>
                        <span>{workshop.participants}/{workshop.spots} participantes</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recursos Recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-500">{resource.type} • {resource.duration}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Alert */}
        <Alert className="mt-8">
          <AlertDescription className="flex items-center justify-between">
            <span>Has completado 3 de 4 sesiones este mes. ¡Continúa así!</span>
            <Button variant="outline" size="sm">Ver Progreso</Button>
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
};

export default DashboardView;
