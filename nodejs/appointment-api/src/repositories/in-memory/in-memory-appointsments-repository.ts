// DEPENDENCY
import { areIntervalsOverlapping } from "date-fns";

// ENTITY
import { Appointment } from "../../entities/appointment";

// REPOSITORY
import { AppointmentsRepository } from "../appointments-repository";

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
	public items: Appointment[] = []
	
	async create(appointment: Appointment): Promise<void> {
		this.items.push(appointment)
	}

	async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
		const overlappingAppointments = this.items.find(appointment => {
			return areIntervalsOverlapping(
				{ start: startsAt, end: endsAt },
				{ start: appointment.startsAt, end: appointment.endsAt },
				{ inclusive: true }
			)
		})

		if(!overlappingAppointments) {
			return null
		}

		return overlappingAppointments
	}
}