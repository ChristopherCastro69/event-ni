import React from "react";
import { EventCard } from "./EventCard";
import { EventFromDB } from "@/types";
import { motion } from "framer-motion";

interface EventGridProps {
  upcomingEvents: EventFromDB[];
  recentEvents: EventFromDB[];
  pastEvents: EventFromDB[];
}

const container = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const EventGrid: React.FC<EventGridProps> = ({
  upcomingEvents,
  recentEvents,
  pastEvents,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {upcomingEvents.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                isFeatured={index === 0}
              />
            ))}
          </div>
        </section>
      )}

      {recentEvents.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Recent Events
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {recentEvents.map((event) => (
              <motion.div key={event.id} variants={item}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Past Events
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {pastEvents.map((event) => (
              <motion.div key={event.id} variants={item}>
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </div>
  );
};
