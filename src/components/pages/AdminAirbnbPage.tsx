import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit2, Trash2, Home, Calendar, DollarSign, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  status: 'available' | 'booked' | 'maintenance';
}

export default function AdminAirbnbPage() {
  const [properties, setProperties] = useState<Property[]>([
    {
      id: '1',
      name: 'Apartament Modern în Centru',
      location: 'București',
      price: 150,
      bedrooms: 2,
      bathrooms: 1,
      description: 'Apartament modern cu toate facilitățile',
      status: 'available',
    },
    {
      id: '2',
      name: 'Vila de Lux cu Grădină',
      location: 'Constanța',
      price: 250,
      bedrooms: 4,
      bathrooms: 2,
      description: 'Vila spațioasă cu acces la plajă',
      status: 'booked',
    },
  ]);

  const [formData, setFormData] = useState<Partial<Property>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddProperty = () => {
    setFormData({});
    setEditingId(null);
    setShowForm(true);
  };

  const handleEditProperty = (property: Property) => {
    setFormData(property);
    setEditingId(property.id);
    setShowForm(true);
  };

  const handleSaveProperty = () => {
    if (!formData.name || !formData.location || !formData.price) {
      alert('Completează toate câmpurile obligatorii');
      return;
    }

    if (editingId) {
      setProperties(properties.map(p => p.id === editingId ? { ...formData as Property, id: editingId } : p));
    } else {
      const newProperty: Property = {
        id: Date.now().toString(),
        name: formData.name || '',
        location: formData.location || '',
        price: formData.price || 0,
        bedrooms: formData.bedrooms || 1,
        bathrooms: formData.bathrooms || 1,
        description: formData.description || '',
        status: 'available',
      };
      setProperties([...properties, newProperty]);
    }

    setShowForm(false);
    setFormData({});
    setEditingId(null);
  };

  const handleDeleteProperty = (id: string) => {
    if (confirm('Ești sigur că vrei să ștergi această proprietate?')) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({});
    setEditingId(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'booked':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'available':
        return 'Disponibilă';
      case 'booked':
        return 'Rezervată';
      case 'maintenance':
        return 'Întreținere';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Header />
      
      <main className="flex-1">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-heading font-bold text-primary mb-2">Administrare Airbnb</h1>
              <p className="text-muted-foreground font-paragraph">Gestionează proprietățile și rezervările tale</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Proprietăți</p>
                      <p className="text-2xl font-bold text-primary">{properties.length}</p>
                    </div>
                    <Home className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Disponibile</p>
                      <p className="text-2xl font-bold text-accent">{properties.filter(p => p.status === 'available').length}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Rezervate</p>
                      <p className="text-2xl font-bold text-blue-600">{properties.filter(p => p.status === 'booked').length}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Venit Mediu/Noapte</p>
                      <p className="text-2xl font-bold text-primary">
                        {properties.length > 0 ? `${Math.round(properties.reduce((sum, p) => sum + p.price, 0) / properties.length)}€` : '0€'}
                      </p>
                    </div>
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <Tabs defaultValue="properties" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="properties">Proprietăți</TabsTrigger>
                <TabsTrigger value="calendar">Calendar Rezervări</TabsTrigger>
              </TabsList>

              <TabsContent value="properties" className="space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-heading font-bold text-primary">Lista Proprietăților</h2>
                  <Button onClick={handleAddProperty} className="bg-accent hover:bg-accent/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Adaugă Proprietate
                  </Button>
                </div>

                {/* Form */}
                {showForm && (
                  <Card className="mb-6 border-accent/20">
                    <CardHeader>
                      <CardTitle>{editingId ? 'Editează Proprietate' : 'Adaugă Proprietate Nouă'}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nume Proprietate *</Label>
                          <Input
                            id="name"
                            value={formData.name || ''}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="ex: Apartament Modern"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Locație *</Label>
                          <Input
                            id="location"
                            value={formData.location || ''}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="ex: București"
                          />
                        </div>
                        <div>
                          <Label htmlFor="price">Preț/Noapte (€) *</Label>
                          <Input
                            id="price"
                            type="number"
                            value={formData.price || ''}
                            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                            placeholder="ex: 150"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="bedrooms">Dormitoare</Label>
                            <Input
                              id="bedrooms"
                              type="number"
                              value={formData.bedrooms || 1}
                              onChange={(e) => setFormData({ ...formData, bedrooms: parseInt(e.target.value) })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="bathrooms">Băi</Label>
                            <Input
                              id="bathrooms"
                              type="number"
                              value={formData.bathrooms || 1}
                              onChange={(e) => setFormData({ ...formData, bathrooms: parseInt(e.target.value) })}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="description">Descriere</Label>
                        <Textarea
                          id="description"
                          value={formData.description || ''}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="Descrie proprietatea..."
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outline" onClick={handleCancel}>
                          Anulează
                        </Button>
                        <Button onClick={handleSaveProperty} className="bg-accent hover:bg-accent/90">
                          {editingId ? 'Salvează Modificări' : 'Adaugă Proprietate'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Properties List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <Card key={property.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{property.name}</CardTitle>
                            <CardDescription>{property.location}</CardDescription>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(property.status)}`}>
                            {getStatusLabel(property.status)}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground line-clamp-2">{property.description}</p>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="text-center">
                            <p className="text-muted-foreground">Dormitoare</p>
                            <p className="font-semibold text-primary">{property.bedrooms}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-muted-foreground">Băi</p>
                            <p className="font-semibold text-primary">{property.bathrooms}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-muted-foreground">Preț</p>
                            <p className="font-semibold text-accent">{property.price}€</p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditProperty(property)}
                            className="flex-1"
                          >
                            <Edit2 className="w-4 h-4 mr-1" />
                            Editează
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteProperty(property.id)}
                            className="flex-1 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Șterge
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {properties.length === 0 && !showForm && (
                  <Card className="text-center py-12">
                    <Home className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Nu ai nicio proprietate adăugată</p>
                    <Button onClick={handleAddProperty} className="bg-accent hover:bg-accent/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Adaugă Prima Proprietate
                    </Button>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="calendar" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar Rezervări</CardTitle>
                    <CardDescription>Vizualizează și gestionează rezervările</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Funcționalitate calendar - în curând</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
