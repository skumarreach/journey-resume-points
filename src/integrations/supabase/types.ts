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
      admins: {
        Row: {
          created_at: string
          email: string
          id: string
          is_active: boolean | null
          role: Database["public"]["Enums"]["admin_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean | null
          role?: Database["public"]["Enums"]["admin_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_history: {
        Row: {
          created_at: string
          id: string
          is_bot: boolean | null
          message: string
          user_email: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_bot?: boolean | null
          message: string
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_bot?: boolean | null
          message?: string
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      post_analytics: {
        Row: {
          clicks: number | null
          comments: number | null
          engagement: number | null
          id: string
          impressions: number | null
          likes: number | null
          platform: Database["public"]["Enums"]["social_platform"]
          post_id: string
          reach: number | null
          recorded_at: string
          shares: number | null
        }
        Insert: {
          clicks?: number | null
          comments?: number | null
          engagement?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          platform: Database["public"]["Enums"]["social_platform"]
          post_id: string
          reach?: number | null
          recorded_at?: string
          shares?: number | null
        }
        Update: {
          clicks?: number | null
          comments?: number | null
          engagement?: number | null
          id?: string
          impressions?: number | null
          likes?: number | null
          platform?: Database["public"]["Enums"]["social_platform"]
          post_id?: string
          reach?: number | null
          recorded_at?: string
          shares?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "post_analytics_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          content: string
          created_at: string
          created_by: string
          external_post_id: string | null
          id: string
          media_urls: string[] | null
          platform: Database["public"]["Enums"]["social_platform"]
          published_at: string | null
          scheduled_at: string | null
          social_account_id: string | null
          status: Database["public"]["Enums"]["post_status"] | null
          title: string | null
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          created_by: string
          external_post_id?: string | null
          id?: string
          media_urls?: string[] | null
          platform: Database["public"]["Enums"]["social_platform"]
          published_at?: string | null
          scheduled_at?: string | null
          social_account_id?: string | null
          status?: Database["public"]["Enums"]["post_status"] | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string
          external_post_id?: string | null
          id?: string
          media_urls?: string[] | null
          platform?: Database["public"]["Enums"]["social_platform"]
          published_at?: string | null
          scheduled_at?: string | null
          social_account_id?: string | null
          status?: Database["public"]["Enums"]["post_status"] | null
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_social_account_id_fkey"
            columns: ["social_account_id"]
            isOneToOne: false
            referencedRelation: "social_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_accounts: {
        Row: {
          access_token_encrypted: string | null
          account_id: string
          account_name: string
          added_by: string | null
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean | null
          platform: Database["public"]["Enums"]["social_platform"]
          refresh_token_encrypted: string | null
          updated_at: string
        }
        Insert: {
          access_token_encrypted?: string | null
          account_id: string
          account_name: string
          added_by?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          platform: Database["public"]["Enums"]["social_platform"]
          refresh_token_encrypted?: string | null
          updated_at?: string
        }
        Update: {
          access_token_encrypted?: string | null
          account_id?: string
          account_name?: string
          added_by?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          platform?: Database["public"]["Enums"]["social_platform"]
          refresh_token_encrypted?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "social_accounts_added_by_fkey"
            columns: ["added_by"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      admin_role:
        | "super_admin"
        | "content_admin"
        | "analytics_admin"
        | "social_admin"
      post_status: "draft" | "scheduled" | "published" | "failed"
      social_platform:
        | "facebook"
        | "instagram"
        | "twitter"
        | "linkedin"
        | "youtube"
        | "tiktok"
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
    Enums: {
      admin_role: [
        "super_admin",
        "content_admin",
        "analytics_admin",
        "social_admin",
      ],
      post_status: ["draft", "scheduled", "published", "failed"],
      social_platform: [
        "facebook",
        "instagram",
        "twitter",
        "linkedin",
        "youtube",
        "tiktok",
      ],
    },
  },
} as const
