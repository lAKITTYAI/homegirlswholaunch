export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
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
      board_elements: {
        Row: {
          board_id: string
          content: Json
          created_at: string
          element_type: string
          height: number
          id: string
          position_x: number
          position_y: number
          updated_at: string
          width: number
          z_index: number
        }
        Insert: {
          board_id: string
          content: Json
          created_at?: string
          element_type: string
          height?: number
          id?: string
          position_x?: number
          position_y?: number
          updated_at?: string
          width?: number
          z_index?: number
        }
        Update: {
          board_id?: string
          content?: Json
          created_at?: string
          element_type?: string
          height?: number
          id?: string
          position_x?: number
          position_y?: number
          updated_at?: string
          width?: number
          z_index?: number
        }
        Relationships: [
          {
            foreignKeyName: "board_elements_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "vision_boards"
            referencedColumns: ["id"]
          },
        ]
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
      custom_meal_plans: {
        Row: {
          calorie_range: string
          created_at: string
          description: string
          diet_type: string
          guidelines: string[] | null
          id: string
          meals: Json
          name: string
          target_goal: string
        }
        Insert: {
          calorie_range: string
          created_at?: string
          description: string
          diet_type: string
          guidelines?: string[] | null
          id?: string
          meals: Json
          name: string
          target_goal: string
        }
        Update: {
          calorie_range?: string
          created_at?: string
          description?: string
          diet_type?: string
          guidelines?: string[] | null
          id?: string
          meals?: Json
          name?: string
          target_goal?: string
        }
        Relationships: []
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
      jumpstarter_hacks: {
        Row: {
          benefits: string[] | null
          category: string
          created_at: string
          description: string
          difficulty: string
          duration: string | null
          id: string
          time_of_day: string | null
          title: string
        }
        Insert: {
          benefits?: string[] | null
          category: string
          created_at?: string
          description: string
          difficulty: string
          duration?: string | null
          id?: string
          time_of_day?: string | null
          title: string
        }
        Update: {
          benefits?: string[] | null
          category?: string
          created_at?: string
          description?: string
          difficulty?: string
          duration?: string | null
          id?: string
          time_of_day?: string | null
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
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
      tools: {
        Row: {
          category: string
          cost: string
          created_at: string
          difficulty: string
          id: string
          link: string
          name: string
          skill_level: string
          use_case: string
        }
        Insert: {
          category: string
          cost: string
          created_at?: string
          difficulty: string
          id?: string
          link: string
          name: string
          skill_level: string
          use_case: string
        }
        Update: {
          category?: string
          cost?: string
          created_at?: string
          difficulty?: string
          id?: string
          link?: string
          name?: string
          skill_level?: string
          use_case?: string
        }
        Relationships: []
      }
      transformations: {
        Row: {
          created_at: string
          goals: Json | null
          id: string
          original_image_path: string
          status: string
          transformation_type: string
          transformed_image_path: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          goals?: Json | null
          id?: string
          original_image_path: string
          status?: string
          transformation_type: string
          transformed_image_path?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          goals?: Json | null
          id?: string
          original_image_path?: string
          status?: string
          transformation_type?: string
          transformed_image_path?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_fasting_logs: {
        Row: {
          duration: number
          end_time: string | null
          id: string
          method: string
          start_time: string
          user_id: string | null
        }
        Insert: {
          duration: number
          end_time?: string | null
          id?: string
          method: string
          start_time?: string
          user_id?: string | null
        }
        Update: {
          duration?: number
          end_time?: string | null
          id?: string
          method?: string
          start_time?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_hack_logs: {
        Row: {
          hack_name: string
          id: string
          logged_at: string
          user_id: string | null
        }
        Insert: {
          hack_name: string
          id?: string
          logged_at?: string
          user_id?: string | null
        }
        Update: {
          hack_name?: string
          id?: string
          logged_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_tasks: {
        Row: {
          completed: boolean
          created_at: string
          duration: number
          id: string
          scheduled_time: string
          title: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          duration: number
          id: string
          scheduled_time: string
          title: string
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          duration?: number
          id?: string
          scheduled_time?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      vision_boards: {
        Row: {
          board_type: string
          canvas_data: Json | null
          created_at: string
          description: string | null
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          board_type?: string
          canvas_data?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          board_type?: string
          canvas_data?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      weight_loss_hacks: {
        Row: {
          created_at: string
          description: string
          effect: string
          how_to_use: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description: string
          effect: string
          how_to_use: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string
          effect?: string
          how_to_use?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      workout_routines: {
        Row: {
          created_at: string
          description: string
          duration: string
          equipment_needed: string[]
          fitness_level: string
          goal: string
          guidelines: string[] | null
          id: string
          name: string
          workout_days: Json
        }
        Insert: {
          created_at?: string
          description: string
          duration: string
          equipment_needed: string[]
          fitness_level: string
          goal: string
          guidelines?: string[] | null
          id?: string
          name: string
          workout_days: Json
        }
        Update: {
          created_at?: string
          description?: string
          duration?: string
          equipment_needed?: string[]
          fitness_level?: string
          goal?: string
          guidelines?: string[] | null
          id?: string
          name?: string
          workout_days?: Json
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
