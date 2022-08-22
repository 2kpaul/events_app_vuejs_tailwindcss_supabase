import { supabase } from '@/client'

function getEvents() {
  return supabase.from('events').select()
}

function getEvent(id) {
  return supabase.from('events').select('*').eq('id', id)
}

export default { getEvents, getEvent }
