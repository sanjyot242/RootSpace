

// Define an interface for each breadcrumb item
export interface BreadcrumbItemProps {
  label: string;
  state: 'Active' | 'Disabled' | 'Hover' | 'Previous';
}

// Define an interface for the main breadcrumb component props
export interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
  variant?: 'Web' | 'Mobile';
}

// Helper function to determine the styling based on the item's state
const getItemClass = (state: BreadcrumbItemProps['state']): string => {
  switch (state) {
    case 'Active':
      return 'text-gray-900 font-semibold';
    case 'Disabled':
      return 'text-gray-300 cursor-not-allowed';
    case 'Hover':
      return 'text-gray-700 hover:text-gray-900';
    case 'Previous':
    default:
      return 'text-gray-600';
  }
};

// BreadcrumbItem component with props defined using the BreadcrumbItemProps interface
export const BreadcrumbItem: React.FC<{ items: BreadcrumbItemProps; isLast: boolean }> = ({ items, isLast }) => (
  <div className="flex items-center">
    <span className={getItemClass(items.state)}>{items.label}</span>
    {!isLast && <span className="mx-2 text-gray-400">›</span>}
  </div>
);

// Breadcrumb component using the BreadcrumbProps interface
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, variant = 'Web' }) => (
  <nav className={`flex gap-4 ${variant === 'Mobile' ? 'w-[462px] h-[20px]' : 'w-[477px] h-[24px]'}`}>
    {items.map((item, index) => (
      <BreadcrumbItem key={index} items={item} isLast={index === items.length - 1} />
    ))}
  </nav>
);



