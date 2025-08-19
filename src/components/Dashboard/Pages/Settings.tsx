import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Key,
  Mail,
  Phone,
  MapPin,
  Building,
  Users,
  CreditCard,
  Download,
  Upload,
  Trash2,
  Save,
  RefreshCw,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle,
  Info,
  Moon,
  Sun,
  Monitor,
  Volume2,
  VolumeX,
  Smartphone,
  Laptop,
  Tablet,
  Clock,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  HardDrive,
  Wifi,
  Bluetooth,
  Camera,
  Mic,
  Speaker,
  Headphones,
  Printer,
  Scanner,
  Gamepad2,
  Zap,
  Battery,
  Cpu,
  MemoryStick,
  HardDriveIcon,
  Network,
  Router,
  Server,
  Cloud,
  CloudUpload,
  CloudDownload,
  Lock,
  Unlock,
  ShieldCheck,
  ShieldAlert,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Crown,
  Award,
  Star,
  Heart,
  Bookmark,
  Flag,
  Tag,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  Grid,
  List,
  BarChart,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Activity,
  Pulse,
  Target,
  Crosshair,
  Focus,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Move,
  Copy,
  Scissors,
  Clipboard,
  Link,
  ExternalLink,
  Share,
  Share2,
  Send,
  MessageCircle,
  MessageSquare,
  Chat,
  Comment,
  ThumbsUp,
  ThumbsDown,
  Plus,
  Minus,
  Edit,
  Edit2,
  Edit3,
  PenTool,
  Brush,
  Eraser,
  Highlighter,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  List as ListIcon,
  CheckSquare,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Pentagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  Angry,
  Laugh,
  Surprised,
  Confused,
  Sleepy,
  Wink,
  Kiss,
  Tongue,
  Sunglasses,
  Nerd,
  Monocle,
  Thinking,
  Shushing,
  Hugging,
  Saluting,
  Partying,
  Disguised,
  Cowboy,
  Ninja,
  Detective,
  Scientist,
  Artist,
  Chef,
  Farmer,
  Mechanic,
  Doctor,
  Nurse,
  Teacher,
  Student,
  Lawyer,
  Judge,
  Police,
  Firefighter,
  Soldier,
  Pilot,
  Astronaut,
  Superhero,
  Villain,
  Ghost,
  Alien,
  Robot,
  Monster,
  Dragon,
  Unicorn,
  Phoenix,
  Pegasus,
  Centaur,
  Mermaid,
  Fairy,
  Angel,
  Devil,
  Wizard,
  Witch,
  Vampire,
  Zombie,
  Skeleton,
  Skull,
  Crossbones,
  Coffin,
  Tombstone,
  Candle,
  Fire,
  Flame,
  Torch,
  Lantern,
  Lightbulb,
  Flashlight,
  Spotlight,
  Lamp,
  Chandelier,
  Fireplace,
  Campfire,
  Bonfire,
  Fireworks,
  Sparkler,
  Sparkles,
  Glitter,
  Rainbow,
  Storm,
  Lightning,
  Thunder,
  Rain,
  Snow,
  Hail,
  Sleet,
  Fog,
  Mist,
  Dew,
  Frost,
  Ice,
  Icicle,
  Snowflake,
  Snowman,
  Igloo,
  Glacier,
  Iceberg,
  Desert,
  Oasis,
  Cactus,
  Palm,
  Tree,
  Forest,
  Jungle,
  Bamboo,
  Grass,
  Flower,
  Rose,
  Tulip,
  Sunflower,
  Daisy,
  Lily,
  Orchid,
  Cherry,
  Blossom,
  Bouquet,
  Wreath,
  Garland,
  Crown as CrownIcon,
  Tiara,
  Ring,
  Necklace,
  Bracelet,
  Earrings,
  Watch,
  Glasses,
  Sunglasses as SunglassesIcon,
  Hat,
  Cap,
  Helmet,
  Mask,
  Scarf,
  Gloves,
  Mittens,
  Socks,
  Shoes,
  Boots,
  Sandals,
  Slippers,
  Sneakers,
  HighHeels,
  Dress,
  Shirt,
  Pants,
  Shorts,
  Skirt,
  Jacket,
  Coat,
  Sweater,
  Hoodie,
  Vest,
  Tie,
  Bowtie,
  Suit,
  Tuxedo,
  Uniform,
  Apron,
  Bikini,
  Swimsuit,
  Underwear,
  Bra,
  Panties,
  Boxers,
  Briefs,
  Pajamas,
  Nightgown,
  Robe,
  Kimono,
  Sari,
  Kilt,
  Toga,
  Poncho,
  Cloak,
  Cape,
  Shawl,
  Blanket,
  Pillow,
  Cushion,
  Mattress,
  Bed,
  Sofa,
  Chair,
  Table,
  Desk,
  Shelf,
  Cabinet,
  Drawer,
  Closet,
  Wardrobe,
  Mirror,
  Picture,
  Frame,
  Painting,
  Sculpture,
  Statue,
  Vase,
  Pot,
  Bowl,
  Plate,
  Cup,
  Mug,
  Glass,
  Bottle,
  Jar,
  Can,
  Box,
  Bag,
  Basket,
  Bucket,
  Barrel,
  Crate,
  Container,
  Package,
  Parcel,
  Gift,
  Present,
  Ribbon,
  Bow,
  Balloon,
  Confetti,
  Streamer,
  Banner,
  Flag as FlagIcon,
  Pennant,
  Sign,
  Poster,
  Billboard,
  Advertisement,
  Flyer,
  Brochure,
  Pamphlet,
  Leaflet,
  Booklet,
  Magazine,
  Newspaper,
  Journal,
  Diary,
  Notebook,
  Notepad,
  Sketchbook,
  Album,
  Scrapbook,
  Portfolio,
  Folder,
  File,
  Document,
  Paper,
  Page,
  Sheet,
  Card,
  Postcard,
  Letter,
  Envelope,
  Stamp,
  Seal,
  Signature,
  Autograph,
  Certificate,
  Diploma,
  Award as AwardIcon,
  Medal,
  Trophy,
  Prize,
  Ribbon as RibbonIcon,
  Badge,
  Patch,
  Pin,
  Button,
  Sticker,
  Label,
  Tag as TagIcon,
  Barcode,
  QRCode,
  ID,
  Passport,
  License,
  Permit,
  Ticket,
  Coupon,
  Voucher,
  Receipt,
  Invoice,
  Bill,
  Check,
  Money,
  Cash,
  Coin,
  Dollar,
  Euro,
  Pound,
  Yen,
  Won,
  Rupee,
  Ruble,
  Franc,
  Peso,
  Real,
  Lira,
  Dinar,
  Dirham,
  Riyal,
  Shekel,
  Baht,
  Dong,
  Krone,
  Krona,
  Zloty,
  Forint,
  Leu,
  Lev,
  Tenge,
  Som,
  Manat,
  Dram,
  Lari,
  Rand,
  Birr,
  Cedi,
  Naira,
  Shilling,
  Kwacha,
  Pula,
  Lilangeni,
  Nakfa,
  Ouguiya,
  Dalasi,
  Leone,
  Franc as FrancIcon,
  Dinar as DinarIcon,
  Pound as PoundIcon,
  Dollar as DollarIcon,
  Euro as EuroIcon,
  Yen as YenIcon,
  Won as WonIcon,
  Rupee as RupeeIcon,
  Ruble as RubleIcon,
  Peso as PesoIcon,
  Real as RealIcon,
  Lira as LiraIcon,
  Dirham as DirhamIcon,
  Riyal as RiyalIcon,
  Shekel as ShekelIcon,
  Baht as BahtIcon,
  Dong as DongIcon,
  Krone as KroneIcon,
  Krona as KronaIcon,
  Zloty as ZlotyIcon,
  Forint as ForintIcon,
  Leu as LeuIcon,
  Lev as LevIcon,
  Tenge as TengeIcon,
  Som as SomIcon,
  Manat as ManatIcon,
  Dram as DramIcon,
  Lari as LariIcon,
  Rand as RandIcon,
  Birr as BirrIcon,
  Cedi as CediIcon,
  Naira as NairaIcon,
  Shilling as ShillingIcon,
  Kwacha as KwachaIcon,
  Pula as PulaIcon,
  Lilangeni as LilangeniIcon,
  Nakfa as NakfaIcon,
  Ouguiya as OuguiyaIcon,
  Dalasi as DalasiIcon,
  Leone as LeoneIcon
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  avatar?: string;
  bio?: string;
  location: string;
  timezone: string;
  language: string;
  dateFormat: string;
  timeFormat: string;
  currency: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    desktop: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'team';
    showEmail: boolean;
    showPhone: boolean;
    showLocation: boolean;
  };
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    sidebarCollapsed: boolean;
    compactMode: boolean;
    animations: boolean;
    sounds: boolean;
    autoSave: boolean;
    defaultView: string;
  };
}

interface SystemSettings {
  company: {
    name: string;
    logo?: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    taxId: string;
    industry: string;
  };
  security: {
    passwordPolicy: {
      minLength: number;
      requireUppercase: boolean;
      requireLowercase: boolean;
      requireNumbers: boolean;
      requireSymbols: boolean;
      expirationDays: number;
    };
    twoFactorAuth: boolean;
    sessionTimeout: number;
    ipWhitelist: string[];
    auditLog: boolean;
  };
  integrations: {
    email: {
      provider: string;
      smtp: {
        host: string;
        port: number;
        secure: boolean;
        username: string;
        password: string;
      };
    };
    storage: {
      provider: string;
      maxFileSize: number;
      allowedTypes: string[];
      retention: number;
    };
    backup: {
      enabled: boolean;
      frequency: string;
      retention: number;
      location: string;
    };
  };
  billing: {
    plan: string;
    users: number;
    storage: number;
    bandwidth: number;
    features: string[];
    nextBilling: string;
    paymentMethod: string;
  };
}

const Settings: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    phone: '+55 11 99999-9999',
    position: 'Engenheiro Sênior',
    department: 'Projetos Elétricos',
    bio: 'Engenheiro elétrico com mais de 10 anos de experiência em projetos industriais e comerciais.',
    location: 'São Paulo, SP',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
    currency: 'BRL',
    notifications: {
      email: true,
      push: true,
      sms: false,
      desktop: true
    },
    privacy: {
      profileVisibility: 'team',
      showEmail: true,
      showPhone: false,
      showLocation: true
    },
    preferences: {
      theme: 'auto',
      sidebarCollapsed: false,
      compactMode: false,
      animations: true,
      sounds: true,
      autoSave: true,
      defaultView: 'overview'
    }
  });
  
  const [systemSettings, setSystemSettings] = useState<SystemSettings>({
    company: {
      name: 'Empresa de Engenharia Elétrica',
      address: 'Rua das Flores, 123 - São Paulo, SP',
      phone: '+55 11 3333-3333',
      email: 'contato@empresa.com',
      website: 'https://www.empresa.com',
      taxId: '12.345.678/0001-90',
      industry: 'Engenharia Elétrica'
    },
    security: {
      passwordPolicy: {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSymbols: false,
        expirationDays: 90
      },
      twoFactorAuth: true,
      sessionTimeout: 30,
      ipWhitelist: [],
      auditLog: true
    },
    integrations: {
      email: {
        provider: 'SMTP',
        smtp: {
          host: 'smtp.gmail.com',
          port: 587,
          secure: true,
          username: 'sistema@empresa.com',
          password: '***********'
        }
      },
      storage: {
        provider: 'Local',
        maxFileSize: 50,
        allowedTypes: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'png', 'dwg'],
        retention: 365
      },
      backup: {
        enabled: true,
        frequency: 'daily',
        retention: 30,
        location: 'cloud'
      }
    },
    billing: {
      plan: 'Professional',
      users: 25,
      storage: 500,
      bandwidth: 1000,
      features: ['Projetos Ilimitados', 'Relatórios Avançados', 'Integrações', 'Suporte Prioritário'],
      nextBilling: '2024-01-15',
      paymentMethod: 'Cartão de Crédito'
    }
  });

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'company', label: 'Empresa', icon: Building },
    { id: 'integrations', label: 'Integrações', icon: Zap },
    { id: 'billing', label: 'Cobrança', icon: CreditCard },
    { id: 'system', label: 'Sistema', icon: Database }
  ];

  const handleSave = () => {
    // Simulate save operation
    setUnsavedChanges(false);
    // Show success message
  };

  const handleReset = () => {
    // Reset to original values
    setUnsavedChanges(false);
  };

  const updateUserProfile = (field: string, value: any) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
    setUnsavedChanges(true);
  };

  const updateSystemSettings = (section: string, field: string, value: any) => {
    setSystemSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof SystemSettings],
        [field]: value
      }
    }));
    setUnsavedChanges(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Configurações</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie suas preferências e configurações do sistema</p>
        </div>
        
        {unsavedChanges && (
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReset}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-300 ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              Cancelar
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Save className="w-4 h-4" />
              Salvar Alterações
            </motion.button>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className={`lg:w-64 card ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-300 ${
                    activeTab === tab.id
                      ? isDark
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-700'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className={`card ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <User className="w-6 h-6 text-blue-600" />
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Perfil do Usuário</h3>
              </div>
              
              <div className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{userProfile.name}</h4>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{userProfile.position} • {userProfile.department}</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Alterar Foto
                    </motion.button>
                  </div>
                </div>
                
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Nome Completo</label>
                    <input
                      type="text"
                      value={userProfile.name}
                      onChange={(e) => updateUserProfile('name', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Email</label>
                    <input
                      type="email"
                      value={userProfile.email}
                      onChange={(e) => updateUserProfile('email', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Telefone</label>
                    <input
                      type="tel"
                      value={userProfile.phone}
                      onChange={(e) => updateUserProfile('phone', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Cargo</label>
                    <input
                      type="text"
                      value={userProfile.position}
                      onChange={(e) => updateUserProfile('position', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Departamento</label>
                    <input
                      type="text"
                      value={userProfile.department}
                      onChange={(e) => updateUserProfile('department', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Localização</label>
                    <input
                      type="text"
                      value={userProfile.location}
                      onChange={(e) => updateUserProfile('location', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Bio */}
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Biografia</label>
                  <textarea
                    value={userProfile.bio || ''}
                    onChange={(e) => updateUserProfile('bio', e.target.value)}
                    rows={3}
                    className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="Conte um pouco sobre você..."
                  />
                </div>
                
                {/* Regional Settings */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Idioma</label>
                    <select
                      value={userProfile.language}
                      onChange={(e) => updateUserProfile('language', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="pt-BR">Português (Brasil)</option>
                      <option value="en-US">English (US)</option>
                      <option value="es-ES">Español</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Fuso Horário</label>
                    <select
                      value={userProfile.timezone}
                      onChange={(e) => updateUserProfile('timezone', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                      <option value="America/New_York">New York (GMT-5)</option>
                      <option value="Europe/London">London (GMT+0)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Formato de Data</label>
                    <select
                      value={userProfile.dateFormat}
                      onChange={(e) => updateUserProfile('dateFormat', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Moeda</label>
                    <select
                      value={userProfile.currency}
                      onChange={(e) => updateUserProfile('currency', e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="BRL">Real (R$)</option>
                      <option value="USD">Dólar ($)</option>
                      <option value="EUR">Euro (€)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className={`card ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <Bell className="w-6 h-6 text-blue-600" />
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Notificações</h3>
              </div>
              
              <div className="space-y-6">
                {/* Notification Types */}
                <div>
                  <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Tipos de Notificação</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Email</p>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Receber notificações por email</p>
                        </div>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newNotifications = {
                            ...userProfile.notifications,
                            email: !userProfile.notifications.email
                          };
                          updateUserProfile('notifications', newNotifications);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.notifications.email ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.notifications.email ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-green-600" />
                        <div>
                          <p className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Push</p>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Notificações push no dispositivo</p>
                        </div>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newNotifications = {
                            ...userProfile.notifications,
                            push: !userProfile.notifications.push
                          };
                          updateUserProfile('notifications', newNotifications);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.notifications.push ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.notifications.push ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>SMS</p>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Mensagens de texto para eventos críticos</p>
                        </div>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newNotifications = {
                            ...userProfile.notifications,
                            sms: !userProfile.notifications.sms
                          };
                          updateUserProfile('notifications', newNotifications);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.notifications.sms ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.notifications.sms ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Monitor className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className={`font-medium transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Desktop</p>
                          <p className={`text-sm transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>Notificações do navegador</p>
                        </div>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newNotifications = {
                            ...userProfile.notifications,
                            desktop: !userProfile.notifications.desktop
                          };
                          updateUserProfile('notifications', newNotifications);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.notifications.desktop ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.notifications.desktop ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Tab */}
          {activeTab === 'appearance' && (
            <div className={`card ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <Palette className="w-6 h-6 text-blue-600" />
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Aparência</h3>
              </div>
              
              <div className="space-y-6">
                {/* Theme Selection */}
                <div>
                  <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Tema</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        updateUserProfile('preferences', {
                          ...userProfile.preferences,
                          theme: 'light'
                        });
                      }}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        userProfile.preferences.theme === 'light'
                          ? 'border-blue-500 bg-blue-50'
                          : isDark
                            ? 'border-gray-600 bg-gray-700 hover:border-gray-500'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Sun className="w-6 h-6 text-yellow-500" />
                        <span className={`font-medium ${
                          userProfile.preferences.theme === 'light'
                            ? 'text-blue-700'
                            : isDark ? 'text-white' : 'text-gray-900'
                        }`}>Claro</span>
                      </div>
                      <div className="w-full h-16 bg-white border rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        updateUserProfile('preferences', {
                          ...userProfile.preferences,
                          theme: 'dark'
                        });
                      }}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        userProfile.preferences.theme === 'dark'
                          ? 'border-blue-500 bg-blue-50'
                          : isDark
                            ? 'border-gray-600 bg-gray-700 hover:border-gray-500'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Moon className="w-6 h-6 text-blue-500" />
                        <span className={`font-medium ${
                          userProfile.preferences.theme === 'dark'
                            ? 'text-blue-700'
                            : isDark ? 'text-white' : 'text-gray-900'
                        }`}>Escuro</span>
                      </div>
                      <div className="w-full h-16 bg-gray-800 border rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-600 rounded"></div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        updateUserProfile('preferences', {
                          ...userProfile.preferences,
                          theme: 'auto'
                        });
                      }}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        userProfile.preferences.theme === 'auto'
                          ? 'border-blue-500 bg-blue-50'
                          : isDark
                            ? 'border-gray-600 bg-gray-700 hover:border-gray-500'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Monitor className="w-6 h-6 text-purple-500" />
                        <span className={`font-medium ${
                          userProfile.preferences.theme === 'auto'
                            ? 'text-blue-700'
                            : isDark ? 'text-white' : 'text-gray-900'
                        }`}>Automático</span>
                      </div>
                      <div className="w-full h-16 bg-gradient-to-r from-white to-gray-800 border rounded-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-600 rounded"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Interface Preferences */}
                <div>
                  <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Preferências da Interface</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Modo Compacto</p>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Reduz o espaçamento entre elementos</p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newPreferences = {
                            ...userProfile.preferences,
                            compactMode: !userProfile.preferences.compactMode
                          };
                          updateUserProfile('preferences', newPreferences);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.preferences.compactMode ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.preferences.compactMode ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Animações</p>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Habilita animações na interface</p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newPreferences = {
                            ...userProfile.preferences,
                            animations: !userProfile.preferences.animations
                          };
                          updateUserProfile('preferences', newPreferences);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.preferences.animations ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.preferences.animations ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Sons</p>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Reproduz sons para notificações</p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newPreferences = {
                            ...userProfile.preferences,
                            sounds: !userProfile.preferences.sounds
                          };
                          updateUserProfile('preferences', newPreferences);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.preferences.sounds ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.preferences.sounds ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Salvamento Automático</p>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>Salva alterações automaticamente</p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const newPreferences = {
                            ...userProfile.preferences,
                            autoSave: !userProfile.preferences.autoSave
                          };
                          updateUserProfile('preferences', newPreferences);
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                          userProfile.preferences.autoSave ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            userProfile.preferences.autoSave ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {!['profile', 'notifications', 'appearance'].includes(activeTab) && (
            <div className={`card h-96 flex items-center justify-center ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="text-center">
                <SettingsIcon className={`w-16 h-16 mx-auto mb-4 opacity-50 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Configurações de {tabs.find(t => t.id === activeTab)?.label}</h3>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Esta seção será implementada em breve.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;