export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          content: string
          created_at: string
          date: string
          excerpt: string
          id: string
          title: string
          type: string
        }
        Insert: {
          content: string
          created_at?: string
          date?: string
          excerpt: string
          id?: string
          title: string
          type?: string
        }
        Update: {
          content?: string
          created_at?: string
          date?: string
          excerpt?: string
          id?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      business_listings: {
        Row: {
          amount_paid: number | null
          app_identifier: string | null
          business_name: string
          category: string
          city: string
          cover_image_url: string | null
          created_at: string | null
          description: string
          email: string
          facebook: string | null
          featured_until: string | null
          full_address: string | null
          gallery_images: string[] | null
          hours: Json | null
          id: string
          instagram: string | null
          is_active: boolean | null
          linkedin: string | null
          listing_type: string
          logo_url: string | null
          owner_name: string | null
          owner_user_id: string | null
          payment_status: string | null
          phone: string | null
          price_range: string | null
          rating: number | null
          review_count: number | null
          services: string | null
          state: string
          stripe_checkout_session_id: string | null
          stripe_payment_intent_id: string | null
          updated_at: string | null
          verified: boolean | null
          website: string | null
        }
        Insert: {
          amount_paid?: number | null
          app_identifier?: string | null
          business_name: string
          category: string
          city: string
          cover_image_url?: string | null
          created_at?: string | null
          description: string
          email: string
          facebook?: string | null
          featured_until?: string | null
          full_address?: string | null
          gallery_images?: string[] | null
          hours?: Json | null
          id?: string
          instagram?: string | null
          is_active?: boolean | null
          linkedin?: string | null
          listing_type: string
          logo_url?: string | null
          owner_name?: string | null
          owner_user_id?: string | null
          payment_status?: string | null
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          review_count?: number | null
          services?: string | null
          state: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          updated_at?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Update: {
          amount_paid?: number | null
          app_identifier?: string | null
          business_name?: string
          category?: string
          city?: string
          cover_image_url?: string | null
          created_at?: string | null
          description?: string
          email?: string
          facebook?: string | null
          featured_until?: string | null
          full_address?: string | null
          gallery_images?: string[] | null
          hours?: Json | null
          id?: string
          instagram?: string | null
          is_active?: boolean | null
          linkedin?: string | null
          listing_type?: string
          logo_url?: string | null
          owner_name?: string | null
          owner_user_id?: string | null
          payment_status?: string | null
          phone?: string | null
          price_range?: string | null
          rating?: number | null
          review_count?: number | null
          services?: string | null
          state?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          updated_at?: string | null
          verified?: boolean | null
          website?: string | null
        }
        Relationships: []
      }
      calendar_events: {
        Row: {
          created_at: string
          date: string
          id: string
          phone_number: string | null
          reminder: boolean | null
          reminder_text: string | null
          reminder_time: string | null
          sms_reminder: boolean | null
          sms_reminder_time: string | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          phone_number?: string | null
          reminder?: boolean | null
          reminder_text?: string | null
          reminder_time?: string | null
          sms_reminder?: boolean | null
          sms_reminder_time?: string | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          phone_number?: string | null
          reminder?: boolean | null
          reminder_text?: string | null
          reminder_time?: string | null
          sms_reminder?: boolean | null
          sms_reminder_time?: string | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      challenge_entries: {
        Row: {
          created_at: string
          engagement_comments: number | null
          engagement_likes: number | null
          engagement_shares: number | null
          entry_type: string
          featured: boolean | null
          featured_at: string | null
          id: string
          influencer_id: string | null
          post_link: string | null
          transformation_url: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          engagement_comments?: number | null
          engagement_likes?: number | null
          engagement_shares?: number | null
          entry_type: string
          featured?: boolean | null
          featured_at?: string | null
          id?: string
          influencer_id?: string | null
          post_link?: string | null
          transformation_url?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          engagement_comments?: number | null
          engagement_likes?: number | null
          engagement_shares?: number | null
          entry_type?: string
          featured?: boolean | null
          featured_at?: string | null
          id?: string
          influencer_id?: string | null
          post_link?: string | null
          transformation_url?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "challenge_entries_influencer_id_fkey"
            columns: ["influencer_id"]
            isOneToOne: false
            referencedRelation: "influencers"
            referencedColumns: ["id"]
          },
        ]
      }
      early_access_signups: {
        Row: {
          approved_at: string | null
          created_at: string
          email: string
          id: string
          status: string | null
        }
        Insert: {
          approved_at?: string | null
          created_at?: string
          email: string
          id?: string
          status?: string | null
        }
        Update: {
          approved_at?: string | null
          created_at?: string
          email?: string
          id?: string
          status?: string | null
        }
        Relationships: []
      }
      email_campaigns: {
        Row: {
          body: string
          campaign_name: string
          created_at: string
          day_in_sequence: number | null
          email_type: string
          id: string
          recipient_count: number | null
          scheduled_for: string | null
          sent_at: string | null
          status: string
          subject: string
        }
        Insert: {
          body: string
          campaign_name: string
          created_at?: string
          day_in_sequence?: number | null
          email_type: string
          id?: string
          recipient_count?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject: string
        }
        Update: {
          body?: string
          campaign_name?: string
          created_at?: string
          day_in_sequence?: number | null
          email_type?: string
          id?: string
          recipient_count?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject?: string
        }
        Relationships: []
      }
      funding_applications: {
        Row: {
          business_description: string
          business_goals: string
          business_name: string
          business_structure: string
          created_at: string
          current_challenges: string | null
          email: string
          funding_amount: string
          funding_use: string
          id: string
          industry_type: string
          monthly_revenue: string | null
          number_of_employees: string | null
          phone: string | null
          previous_funding: string | null
          status: string
          years_in_operation: string
        }
        Insert: {
          business_description: string
          business_goals: string
          business_name: string
          business_structure: string
          created_at?: string
          current_challenges?: string | null
          email: string
          funding_amount: string
          funding_use: string
          id?: string
          industry_type: string
          monthly_revenue?: string | null
          number_of_employees?: string | null
          phone?: string | null
          previous_funding?: string | null
          status?: string
          years_in_operation: string
        }
        Update: {
          business_description?: string
          business_goals?: string
          business_name?: string
          business_structure?: string
          created_at?: string
          current_challenges?: string | null
          email?: string
          funding_amount?: string
          funding_use?: string
          id?: string
          industry_type?: string
          monthly_revenue?: string | null
          number_of_employees?: string | null
          phone?: string | null
          previous_funding?: string | null
          status?: string
          years_in_operation?: string
        }
        Relationships: []
      }
      influencers: {
        Row: {
          created_at: string
          creator_code: string | null
          email: string | null
          follower_count: number
          followup_sent_at: string | null
          id: string
          niche: string
          notes: string | null
          outreach_sent_at: string | null
          platform: string
          post_link: string | null
          posted_at: string | null
          status: string
          tier: string
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          creator_code?: string | null
          email?: string | null
          follower_count?: number
          followup_sent_at?: string | null
          id?: string
          niche: string
          notes?: string | null
          outreach_sent_at?: string | null
          platform?: string
          post_link?: string | null
          posted_at?: string | null
          status?: string
          tier: string
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          creator_code?: string | null
          email?: string | null
          follower_count?: number
          followup_sent_at?: string | null
          id?: string
          niche?: string
          notes?: string | null
          outreach_sent_at?: string | null
          platform?: string
          post_link?: string | null
          posted_at?: string | null
          status?: string
          tier?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      marketing_content: {
        Row: {
          category: string | null
          content: string
          content_type: string
          created_at: string
          id: string
          scheduled_date: string | null
          status: string
          title: string
        }
        Insert: {
          category?: string | null
          content: string
          content_type: string
          created_at?: string
          id?: string
          scheduled_date?: string | null
          status?: string
          title: string
        }
        Update: {
          category?: string | null
          content?: string
          content_type?: string
          created_at?: string
          id?: string
          scheduled_date?: string | null
          status?: string
          title?: string
        }
        Relationships: []
      }
      marketing_daily_logs: {
        Row: {
          challenge_entries: number | null
          content_created: number | null
          created_at: string
          followups_sent: number | null
          highlights_featured: number | null
          id: string
          influencers_discovered: number | null
          log_date: string
          notes: string | null
          outreach_sent: number | null
          responses_received: number | null
        }
        Insert: {
          challenge_entries?: number | null
          content_created?: number | null
          created_at?: string
          followups_sent?: number | null
          highlights_featured?: number | null
          id?: string
          influencers_discovered?: number | null
          log_date?: string
          notes?: string | null
          outreach_sent?: number | null
          responses_received?: number | null
        }
        Update: {
          challenge_entries?: number | null
          content_created?: number | null
          created_at?: string
          followups_sent?: number | null
          highlights_featured?: number | null
          id?: string
          influencers_discovered?: number | null
          log_date?: string
          notes?: string | null
          outreach_sent?: number | null
          responses_received?: number | null
        }
        Relationships: []
      }
      net30_applications: {
        Row: {
          amount: number
          billing_type: string
          business_address: string | null
          business_name: string | null
          business_phone: string | null
          business_structure: string | null
          created_at: string
          email: string
          id: string
          monthly_revenue: string | null
          notes: string | null
          plan_name: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          tax_id: string | null
          updated_at: string
          years_in_operation: string | null
        }
        Insert: {
          amount: number
          billing_type: string
          business_address?: string | null
          business_name?: string | null
          business_phone?: string | null
          business_structure?: string | null
          created_at?: string
          email: string
          id?: string
          monthly_revenue?: string | null
          notes?: string | null
          plan_name: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          tax_id?: string | null
          updated_at?: string
          years_in_operation?: string | null
        }
        Update: {
          amount?: number
          billing_type?: string
          business_address?: string | null
          business_name?: string | null
          business_phone?: string | null
          business_structure?: string | null
          created_at?: string
          email?: string
          id?: string
          monthly_revenue?: string | null
          notes?: string | null
          plan_name?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          tax_id?: string | null
          updated_at?: string
          years_in_operation?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          category: string
          created_at: string | null
          description: string
          download_url: string | null
          featured: boolean | null
          id: string
          image_url: string | null
          price: number
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          download_url?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          price?: number
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          download_url?: string | null
          featured?: boolean | null
          id?: string
          image_url?: string | null
          price?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      transformation_credits: {
        Row: {
          created_at: string
          credits_remaining: number
          id: string
          purchased_at: string
          stripe_checkout_session_id: string | null
          stripe_payment_intent_id: string | null
          used_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          credits_remaining?: number
          id?: string
          purchased_at?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          used_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          credits_remaining?: number
          id?: string
          purchased_at?: string
          stripe_checkout_session_id?: string | null
          stripe_payment_intent_id?: string | null
          used_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_meal_plans: {
        Row: {
          allergies: string[] | null
          cooking_time_max: number | null
          daily_calories: number
          diet_type: string
          generated_at: string | null
          id: string
          is_active: boolean | null
          meals_per_day: number
          plan_data: Json
          preferences_notes: string | null
          user_id: string
        }
        Insert: {
          allergies?: string[] | null
          cooking_time_max?: number | null
          daily_calories: number
          diet_type: string
          generated_at?: string | null
          id?: string
          is_active?: boolean | null
          meals_per_day: number
          plan_data: Json
          preferences_notes?: string | null
          user_id: string
        }
        Update: {
          allergies?: string[] | null
          cooking_time_max?: number | null
          daily_calories?: number
          diet_type?: string
          generated_at?: string | null
          id?: string
          is_active?: boolean | null
          meals_per_day?: number
          plan_data?: Json
          preferences_notes?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_meal_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          activity_level: string | null
          age: number | null
          allergies: string[] | null
          check_in_frequency: string | null
          created_at: string | null
          display_name: string | null
          food_preferences: string[] | null
          foods_to_avoid: string[] | null
          gender: string | null
          goal_weight: number | null
          goal_weight_unit: string | null
          has_seen_dashboard_welcome: boolean | null
          height: number | null
          height_unit: string | null
          id: string
          lifestyle_notes: string | null
          medical_conditions: string | null
          partner_name: string | null
          partner_tone: string | null
          primary_goal: string | null
          specific_body_goals: string | null
          timeline: string | null
          updated_at: string | null
          user_id: string
          weight: number | null
          weight_unit: string | null
        }
        Insert: {
          activity_level?: string | null
          age?: number | null
          allergies?: string[] | null
          check_in_frequency?: string | null
          created_at?: string | null
          display_name?: string | null
          food_preferences?: string[] | null
          foods_to_avoid?: string[] | null
          gender?: string | null
          goal_weight?: number | null
          goal_weight_unit?: string | null
          has_seen_dashboard_welcome?: boolean | null
          height?: number | null
          height_unit?: string | null
          id?: string
          lifestyle_notes?: string | null
          medical_conditions?: string | null
          partner_name?: string | null
          partner_tone?: string | null
          primary_goal?: string | null
          specific_body_goals?: string | null
          timeline?: string | null
          updated_at?: string | null
          user_id: string
          weight?: number | null
          weight_unit?: string | null
        }
        Update: {
          activity_level?: string | null
          age?: number | null
          allergies?: string[] | null
          check_in_frequency?: string | null
          created_at?: string | null
          display_name?: string | null
          food_preferences?: string[] | null
          foods_to_avoid?: string[] | null
          gender?: string | null
          goal_weight?: number | null
          goal_weight_unit?: string | null
          has_seen_dashboard_welcome?: boolean | null
          height?: number | null
          height_unit?: string | null
          id?: string
          lifestyle_notes?: string | null
          medical_conditions?: string | null
          partner_name?: string | null
          partner_tone?: string | null
          primary_goal?: string | null
          specific_body_goals?: string | null
          timeline?: string | null
          updated_at?: string | null
          user_id?: string
          weight?: number | null
          weight_unit?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_tasks: {
        Row: {
          completed: boolean
          completed_at: string | null
          created_at: string
          duration: number
          id: string
          scheduled_time: string
          title: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          duration: number
          id?: string
          scheduled_time: string
          title: string
          user_id: string
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          duration?: number
          id?: string
          scheduled_time?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      user_transformations: {
        Row: {
          created_at: string
          gender: string
          id: string
          original_image_url: string
          transformation_type: string | null
          transformed_image_url: string
          user_id: string
        }
        Insert: {
          created_at?: string
          gender: string
          id?: string
          original_image_url: string
          transformation_type?: string | null
          transformed_image_url: string
          user_id: string
        }
        Update: {
          created_at?: string
          gender?: string
          id?: string
          original_image_url?: string
          transformation_type?: string | null
          transformed_image_url?: string
          user_id?: string
        }
        Relationships: []
      }
      user_workout_plans: {
        Row: {
          available_equipment: string[] | null
          difficulty_level: string
          duration_minutes: number
          frequency_per_week: number
          generated_at: string | null
          id: string
          is_active: boolean | null
          physical_limitations: string | null
          plan_data: Json
          time_constraints: string | null
          user_id: string
          workout_type: string
        }
        Insert: {
          available_equipment?: string[] | null
          difficulty_level: string
          duration_minutes: number
          frequency_per_week: number
          generated_at?: string | null
          id?: string
          is_active?: boolean | null
          physical_limitations?: string | null
          plan_data: Json
          time_constraints?: string | null
          user_id: string
          workout_type: string
        }
        Update: {
          available_equipment?: string[] | null
          difficulty_level?: string
          duration_minutes?: number
          frequency_per_week?: number
          generated_at?: string | null
          id?: string
          is_active?: boolean | null
          physical_limitations?: string | null
          plan_data?: Json
          time_constraints?: string | null
          user_id?: string
          workout_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_workout_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      weight_logs: {
        Row: {
          created_at: string
          id: string
          logged_at: string
          notes: string | null
          user_id: string
          weight: number
          weight_unit: string
        }
        Insert: {
          created_at?: string
          id?: string
          logged_at?: string
          notes?: string | null
          user_id: string
          weight: number
          weight_unit?: string
        }
        Update: {
          created_at?: string
          id?: string
          logged_at?: string
          notes?: string | null
          user_id?: string
          weight?: number
          weight_unit?: string
        }
        Relationships: []
      }
      workout_completions: {
        Row: {
          completed: boolean
          completed_at: string | null
          created_at: string
          exercise_name: string
          id: string
          user_id: string
          workout_date: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          exercise_name: string
          id?: string
          user_id: string
          workout_date?: string
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          exercise_name?: string
          id?: string
          user_id?: string
          workout_date?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
