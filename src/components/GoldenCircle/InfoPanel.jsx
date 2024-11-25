import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const InfoPanel = ({ data, section, onClose }) => {
  const panelVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  return (
    <motion.div
      className="absolute right-0 top-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl m-4"
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {data.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Icons.X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          {section === 'why' ? (
            <>
              <p className="text-gray-600 dark:text-gray-300">{data.mainText}</p>
              <ul className="space-y-3">
                {data.details.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icons.Check className="text-green-500 mt-1" size={16} />
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="space-y-4">
              {data.items.map((item, index) => {
                const ItemIcon = Icons[item.icon];
                return (
                  <li key={index} className="flex items-start space-x-3">
                    {ItemIcon && (
                      <ItemIcon className="text-circle-how dark:text-circle-what mt-1" size={20} />
                    )}
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InfoPanel;