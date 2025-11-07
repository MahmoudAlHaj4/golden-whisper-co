import { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  FolderOpen, 
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Edit,
  Trash2,
  Search,
  Mail,
  Calendar,
  Eye,
  Check,
  Clock
} from 'lucide-react';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: '',
    material: '',
    gemstone: '',
    weight: ''
  });

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    description: ''
  });

  const [adminForm, setAdminForm] = useState({
    name: '',
    email: '',
    role: 'Admin'
  });

  const materials = ['Gold', 'Silver', 'Platinum', 'White Gold', 'Rose Gold'];
  const gemstones = ['Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Pearl', 'Topaz', 'Amethyst'];

  const [products, setProducts] = useState([
    { id: 1, name: 'Diamond Solitaire Ring', category: 'Rings', price: 2499, stock: 12, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100' },
    { id: 2, name: 'Gold Chain Necklace', category: 'Necklaces', price: 899, stock: 25, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100' },
    { id: 3, name: 'Pearl Earrings', category: 'Earrings', price: 349, stock: 18, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100' },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: 'Rings', productCount: 45, description: 'Engagement rings, wedding bands, and fashion rings' },
    { id: 2, name: 'Necklaces', productCount: 32, description: 'Chains, pendants, and statement necklaces' },
    { id: 3, name: 'Earrings', productCount: 28, description: 'Studs, hoops, and drop earrings' },
    { id: 4, name: 'Bracelets', productCount: 21, description: 'Bangles, chains, and charm bracelets' },
  ]);
  
  const [contacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Custom Design', message: 'I would like to inquire about creating a custom engagement ring with specific diamond specifications.' },
    { id: 2, name: 'Mary Smith', email: 'mary@example.com', subject: 'Ring Sizing', message: 'Need help with resizing my wedding band. What is the process and timeline?' }
  ]);
  
  const [selectedContact, setSelectedContact] = useState(null);
  
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Jane Parker', email: 'jane@example.com', phone: '+1 234 567 8901', date: '2024-11-15', time: '10:00 AM', service: 'Ring Sizing', status: 'Pending', notes: 'Need to resize engagement ring' },
    { id: 2, name: 'Mike Andrew', email: 'mike@example.com', phone: '+1 234 567 8902', date: '2024-11-16', time: '2:00 PM', service: 'Custom Design Consultation', status: 'Confirmed', notes: 'Interested in custom wedding band design' },
    { id: 3, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1 234 567 8903', date: '2024-11-17', time: '11:30 AM', service: 'Jewelry Cleaning', status: 'Pending', notes: 'Clean necklace and earrings set' },
    { id: 4, name: 'Tom Wilson', email: 'tom@example.com', phone: '+1 234 567 8904', date: '2024-11-18', time: '3:00 PM', service: 'Appraisal', status: 'Completed', notes: 'Estate jewelry appraisal' }
  ]);
  
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [admins, setAdmins] = useState([
    { id: 1, name: 'Admin User', email: 'admin@Lumière.com', role: 'Super Admin' },
    { id: 2, name: 'John Doe', email: 'john@Lumière.com', role: 'Admin' },
    { id: 3, name: 'Jane Smith', email: 'jane@Lumière.com', role: 'Admin' },
  ]);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'categories', name: 'Categories', icon: FolderOpen },
    { id: 'contact', name: 'Contact', icon: Mail },
    { id: 'appointments', name: 'Appointments', icon: Calendar },
    { id: 'admins', name: 'Admins', icon: Settings },
  ];

  const handleAddProduct = () => {
    if (productForm.name && productForm.category && productForm.price && productForm.stock) {
      const newProduct = {
        id: products.length + 1,
        name: productForm.name,
        category: productForm.category,
        price: parseFloat(productForm.price),
        stock: parseInt(productForm.stock),
        image: productForm.image || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100',
        material: productForm.material,
        gemstone: productForm.gemstone,
        weight: productForm.weight
      };
      setProducts([...products, newProduct]);
      setShowProductModal(false);
      setProductForm({ name: '', category: '', price: '', stock: '', description: '', image: '', material: '', gemstone: '', weight: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleAddCategory = () => {
    if (categoryForm.name) {
      const newCategory = {
        id: categories.length + 1,
        name: categoryForm.name,
        description: categoryForm.description,
        productCount: 0
      };
      setCategories([...categories, newCategory]);
      setShowCategoryModal(false);
      setCategoryForm({ name: '', description: '' });
    }
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const handleAddAdmin = () => {
    if (adminForm.name && adminForm.email) {
      const newAdmin = {
        id: admins.length + 1,
        name: adminForm.name,
        email: adminForm.email,
        role: adminForm.role
      };
      setAdmins([...admins, newAdmin]);
      setShowAdminModal(false);
      setAdminForm({ name: '', email: '', role: 'Admin' });
    }
  };

  const handleDeleteAdmin = (id) => {
    setAdmins(admins.filter(a => a.id !== id));
  };

  const handleUpdateAppointmentStatus = (id, newStatus) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
    setSelectedAppointment(null);
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    console.log('Logged out');
  };

  const StatCard = ({ title, value, subtitle, color }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold">{value}</h3>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className={`w-12 h-12 rounded-full ${color} bg-opacity-10 flex items-center justify-center`}>
          <Package className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6 font-sans">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Products" value={products.length} subtitle="Active jewelry items" color="bg-blue-500" />
        <StatCard title="Categories" value={categories.length} subtitle="Active categories" color="bg-green-500" />
        <StatCard title="Appointments" value={appointments.filter(a => a.status === 'Pending').length} subtitle="Pending appointments" color="bg-orange-500" />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Recent Products</h2>
        <div className="space-y-3">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="flex items-center justify-between py-3 border-b">
              <div className="flex items-center gap-3">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover" />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category} • ${product.price}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{product.stock} in stock</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Jewelry Products</h1>
        <button 
          onClick={() => setShowProductModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jewelry..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Stock</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 font-medium">${product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.stock > 20 ? 'bg-green-100 text-green-700' :
                      product.stock > 10 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const CategoriesView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Jewelry Categories</h1>
        <button 
          onClick={() => setShowCategoryModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-blue-600" />
                </button>
                <button 
                  onClick={() => handleDeleteCategory(category.id)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-2">{category.description}</p>
            <p className="text-gray-600 font-medium">{category.productCount} products</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactView = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact Messages</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Email</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Subject</th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {contacts.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{c.name}</td>
                <td className="px-6 py-4">{c.email}</td>
                <td className="px-6 py-4">{c.subject}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => setSelectedContact(c)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    <Eye className="w-4 h-4" />
                    View Message
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const AppointmentsView = () => {
    if (selectedAppointment) {
      return (
        <div className="space-y-6">
          <button 
            onClick={() => setSelectedAppointment(null)}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            ← Back to Appointments
          </button>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedAppointment.name}</h2>
                <p className="text-gray-600">{selectedAppointment.service}</p>
              </div>
              <span className={`px-4 py-2 text-sm rounded-full font-medium ${
                selectedAppointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                selectedAppointment.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                selectedAppointment.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {selectedAppointment.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{selectedAppointment.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-gray-900">{selectedAppointment.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Service</label>
                  <p className="text-gray-900">{selectedAppointment.service}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Date</label>
                  <p className="text-gray-900">{selectedAppointment.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Time</label>
                  <p className="text-gray-900">{selectedAppointment.time}</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 mb-6">
              <label className="text-sm font-medium text-gray-500 block mb-2">Notes</label>
              <p className="text-gray-900 leading-relaxed">{selectedAppointment.notes}</p>
            </div>

            <div className="flex gap-3">
              {selectedAppointment.status === 'Pending' && (
                <button 
                  onClick={() => handleUpdateAppointmentStatus(selectedAppointment.id, 'Confirmed')}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Confirm Appointment
                </button>
              )}
              {selectedAppointment.status === 'Confirmed' && (
                <button 
                  onClick={() => handleUpdateAppointmentStatus(selectedAppointment.id, 'Completed')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Appointments</h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {appointments.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{app.name}</td>
                  <td className="px-6 py-4">{app.service}</td>
                  <td className="px-6 py-4">{app.date}</td>
                  <td className="px-6 py-4">{app.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      app.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      app.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                      app.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedAppointment(app)}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const AdminsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admins</h1>
        <button 
          onClick={() => setShowAdminModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Admin
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Role</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="font-bold">{admin.name.charAt(0)}</span>
                      </div>
                      <span className="font-medium">{admin.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{admin.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      admin.role === 'Super Admin' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {admin.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                      <button 
                        onClick={() => handleDeleteAdmin(admin.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        disabled={admin.role === 'Super Admin'}
                      >
                        <Trash2 className={`w-4 h-4 ${admin.role === 'Super Admin' ? 'text-gray-400' : 'text-red-600'}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'dashboard': return <DashboardView />;
      case 'products': return <ProductsView />;
      case 'categories': return <CategoriesView />;
      case 'admins': return <AdminsView />;
      case 'contact': return <ContactView />;
      case 'appointments': return <AppointmentsView />;
      default: return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(200, 200, 200, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(150, 150, 150, 0.7);
        }
      `}</style>
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Lumière</h2>
          <p className="text-sm text-gray-600">Jewelry Admin</p>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeSection === item.id
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            
            <div className="flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="font-bold">A</span>
                </div>
                <div className="hidden md:block">
                  <p className="font-medium">Admin User</p>
                  <p className="text-sm text-gray-600">admin@Lumière.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Add Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-slideUp">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Add New Jewelry Product</h2>
              <button
                onClick={() => setShowProductModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar flex-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                <input
                  type="text"
                  value={productForm.name}
                  onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                  placeholder="e.g. Diamond Engagement Ring"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={productForm.category}
                  onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input
                    type="number"
                    value={productForm.price}
                    onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                    placeholder="0.00"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                  <input
                    type="number"
                    value={productForm.stock}
                    onChange={(e) => setProductForm({...productForm, stock: e.target.value})}
                    placeholder="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Material</label>
                <select
                  value={productForm.material}
                  onChange={(e) => setProductForm({...productForm, material: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                >
                  <option value="">Select material</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>{material}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gemstone</label>
                <select
                  value={productForm.gemstone}
                  onChange={(e) => setProductForm({...productForm, gemstone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                >
                  <option value="">Select gemstone (optional)</option>
                  {gemstones.map((stone) => (
                    <option key={stone} value={stone}>{stone}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (grams)</label>
                <input
                  type="number"
                  step="0.01"
                  value={productForm.weight}
                  onChange={(e) => setProductForm({...productForm, weight: e.target.value})}
                  placeholder="0.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={productForm.description}
                  onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                  placeholder="Enter product description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  value={productForm.image}
                  onChange={(e) => setProductForm({...productForm, image: e.target.value})}
                  placeholder="https://example.com/jewelry.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddProduct}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Add Product
                </button>
                <button
                  onClick={() => setShowProductModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full animate-slideUp">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Add New Category</h2>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                <input
                  type="text"
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({...categoryForm, name: e.target.value})}
                  placeholder="e.g. Bracelets"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm({...categoryForm, description: e.target.value})}
                  placeholder="Enter category description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddCategory}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Add Category
                </button>
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Admin Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full animate-slideUp">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Add New Admin</h2>
              <button
                onClick={() => setShowAdminModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={adminForm.name}
                  onChange={(e) => setAdminForm({...adminForm, name: e.target.value})}
                  placeholder="Enter admin name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={adminForm.email}
                  onChange={(e) => setAdminForm({...adminForm, email: e.target.value})}
                  placeholder="admin@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={adminForm.role}
                  onChange={(e) => setAdminForm({...adminForm, role: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                >
                  <option value="Admin">Admin</option>
                  <option value="Super Admin">Super Admin</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddAdmin}
                  className="flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Add Admin
                </button>
                <button
                  onClick={() => setShowAdminModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full animate-slideUp">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-6 h-6 text-red-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-2">Logout</h2>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to logout? You will need to login again to access the dashboard.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Yes, Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Message Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full animate-slideUp">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Contact Message</h2>
              <button
                onClick={() => setSelectedContact(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">From</label>
                <p className="text-lg font-medium">{selectedContact.name}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-900">{selectedContact.email}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Subject</label>
                <p className="text-gray-900">{selectedContact.subject}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Message</label>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 leading-relaxed">{selectedContact.message}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setSelectedContact(null)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;